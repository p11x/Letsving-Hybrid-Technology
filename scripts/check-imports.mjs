#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

let hasError = false;
let checkedCount = 0;

function getAllSourceFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== 'dist' && entry.name !== '.git') {
        results = results.concat(getAllSourceFiles(fullPath));
      }
    } else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
      results.push(fullPath);
    }
  }

  return results;
}

function verifyDiskCasing(normalizedRelativePath) {
  const segments = normalizedRelativePath.split(path.sep);
  let current = '.';

  for (const segment of segments) {
    if (segment === '.' || !segment) continue;
    if (!fs.existsSync(current)) return false;
    const contents = fs.readdirSync(current);
    if (!contents.includes(segment)) {
      return false;
    }
    current = path.join(current, segment);
  }

  return true;
}

function hasDefaultExport(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf8');
    return /export\s+default\s+|export\s*\{\s*[^}]*\bas\s+default\b/.test(code);
  } catch {
    return false;
  }
}

const sourceFiles = getAllSourceFiles('./src');

console.log(`\n🔍 Running enhanced import & casing audit across ${sourceFiles.length} source files...\n`);

for (const filePath of sourceFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, lineIndex) => {
    // Match static and dynamic import statements
    const importRegex = /(?:from\s+['"]([^'"]+)['"]|import\s*\(\s*['"]([^'"]+)['"]\s*\)|import\s+['"]([^'"]+)['"])/g;
    let match;

    while ((match = importRegex.exec(line)) !== null) {
      const specifier = match[1] || match[2] || match[3];
      const isLazy = line.includes('lazy(');

      // Check relative imports or "@/..." alias
      if (specifier.startsWith('.') || specifier.startsWith('@/')) {
        checkedCount++;
        const fileDir = path.dirname(filePath);
        let basePath;

        if (specifier.startsWith('@/')) {
          // Resolve alias '@/...' to root './...'
          basePath = path.normalize(path.join('.', specifier.slice(2)));
        } else {
          basePath = path.normalize(path.join(fileDir, specifier));
        }

        let resolvedPath = null;
        let casingValid = false;

        // Extensions including directory index resolution
        const candidateExtensions = [
          '',
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '/index.ts',
          '/index.tsx',
          '/index.js',
          '/index.jsx'
        ];

        for (const ext of candidateExtensions) {
          const candidate = basePath + ext;
          if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
            resolvedPath = candidate;
            casingValid = verifyDiskCasing(path.relative('.', candidate));
            break;
          }
        }

        if (!resolvedPath) {
          console.error(`❌ [MISSING_IMPORT] ${filePath}:${lineIndex + 1}`);
          console.error(`   Cannot resolve '${specifier}' on disk.\n`);
          hasError = true;
        } else if (!casingValid) {
          console.error(`❌ [CASING_MISMATCH] ${filePath}:${lineIndex + 1}`);
          console.error(`   Import '${specifier}' does not match real filesystem casing for '${resolvedPath}'.\n`);
          hasError = true;
        } else if (isLazy && !hasDefaultExport(resolvedPath)) {
          console.error(`❌ [MISSING_DEFAULT_EXPORT] ${filePath}:${lineIndex + 1}`);
          console.error(`   '${specifier}' is loaded via lazy() but does not have a default export in '${resolvedPath}'.\n`);
          hasError = true;
        }
      }
    }
  });
}

if (hasError) {
  console.error(`🚨 Build verification failed! Correct the unresolved imports, casing, or default exports.\n`);
  process.exit(1);
} else {
  console.log(`✅ All ${checkedCount} imports and lazy boundaries verified with exact disk casing and valid default exports!\n`);
  process.exit(0);
}
