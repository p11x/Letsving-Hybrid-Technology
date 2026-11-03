import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  // AI Studio dev server runs strictly on port 3000
  const port = 3000;

  // Trust proxy for IP forwarding behind reverse proxies
  app.set('trust proxy', 1);

  // CORS and JSON body parser
  app.use(cors());
  app.use(express.json());

  // Ensure iframe headers allow embedding inside Google AI Studio preview
  app.use((_req, res, next) => {
    res.removeHeader('X-Frame-Options');
    next();
  });

  // Initialize Resend with fallback for mock mode
  const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');

  // Rate limiting for the contact endpoint
  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: { error: 'Too many requests from this IP, please try again later.' },
  });

  // API Routes
  app.post('/api/contact', contactLimiter, async (req, res) => {
    try {
      const { name, email, phone, company, role, purpose, credentials, message, honeypot } = req.body;

      if (honeypot) {
        return res.status(400).json({ error: 'Spam detected' });
      }

      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }

      const emailContent = `
        New Enquiry from Letsving Hybrid Technology Website:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Company: ${company || 'N/A'}
        Role/Purpose: ${role || purpose || 'N/A'}
        Credentials: ${credentials || 'N/A'}
        Message: ${message || 'N/A'}
      `;

      if (process.env.RESEND_API_KEY) {
        const { error } = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: [process.env.CONTACT_EMAIL || 'connect@letsving.com'],
          subject: `New Enquiry from ${name}`,
          text: emailContent,
        });

        if (error) {
          console.error('Resend Error:', error);
          return res.status(500).json({ error: 'Failed to send message' });
        }
      } else {
        console.log('Mock email sent (No RESEND_API_KEY provided):', emailContent);
      }

      return res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (err) {
      console.error('Contact API Error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Client serving
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  if (process.env.NODE_ENV !== 'test') {
    app.listen(port, '0.0.0.0', () => {
      console.log(`Letsving Hybrid Technology server running on http://0.0.0.0:${port}`);
    });
  }

  return app;
}

startServer();
