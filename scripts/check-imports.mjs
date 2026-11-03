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

const sourceFiles = getAllSourceFiles('./src');

console.log(`\n🔍 Checking imports across ${sourceFiles.length} source files in ./src...\n`);

for (const filePath of sourceFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, lineIndex) => {
    // Match ES static and dynamic import statements
    const match = line.match(/(?:from\s+['"]([^'"]+)['"]|import\s*\(\s*['"]([^'"]+)['"]\s*\)|import\s+['"]([^'"]+)['"])/);
    if (match) {
      const specifier = match[1] || match[2] || match[3];

      // Only validate relative imports (starting with ./ or ../)
      if (specifier.startsWith('.')) {
        checkedCount++;
        const fileDir = path.dirname(filePath);
        let resolvedPath = null;
        let casingValid = false;

        // Common extensions supported by Vite & TypeScript
        const possibleExtensions = ['', '.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx'];

        for (const ext of possibleExtensions) {
          const candidate = path.normalize(path.join(fileDir, specifier + ext));
          if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
            resolvedPath = candidate;

            // Strict case check against Linux filesystem
            const relativeParts = path.relative('.', candidate).split(path.sep);
            let currentPath = '.';
            let matchSegments = true;

            for (const segment of relativeParts) {
              if (segment === '.' || !segment) continue;
              const directoryContents = fs.readdirSync(currentPath);
              if (!directoryContents.includes(segment)) {
                matchSegments = false;
                break;
              }
              currentPath = path.join(currentPath, segment);
            }

            casingValid = matchSegments;
            break;
          }
        }

        if (!resolvedPath) {
          console.error(`❌ [MISSING_IMPORT] ${filePath}:${lineIndex + 1}`);
          console.error(`   Cannot resolve '${specifier}' on disk.\n`);
          hasError = true;
        } else if (!casingValid) {
          console.error(`❌ [CASING_MISMATCH] ${filePath}:${lineIndex + 1}`);
          console.error(`   Import '${specifier}' does not match disk casing for '${resolvedPath}'.\n`);
          hasError = true;
        }
      }
    }
  });
}

if (hasError) {
  console.error(`🚨 Import verification failed! Fix the missing files or casing mismatches before deploying.\n`);
  process.exit(1);
} else {
  console.log(`✅ All ${checkedCount} relative imports verified successfully with exact disk casing!\n`);
  process.exit(0);
}
