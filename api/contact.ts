import type { Request, Response } from 'express';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');

// Basic rate limiting implementation for serverless
const ipCache = new Map<string, { count: number, resetTime: number }>();

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Rate Limiting (15 mins window, max 5 requests)
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const ipString = Array.isArray(ip) ? ip[0] : ip;
  
  const now = Date.now();
  const limitWindow = 15 * 60 * 1000;
  
  const ipData = ipCache.get(ipString) || { count: 0, resetTime: now + limitWindow };
  
  if (now > ipData.resetTime) {
    ipData.count = 1;
    ipData.resetTime = now + limitWindow;
  } else {
    ipData.count += 1;
  }
  
  ipCache.set(ipString, ipData);
  
  // Clean up cache periodically (very naive approach for serverless)
  if (ipCache.size > 1000) ipCache.clear();

  if (ipData.count > 5) {
    return res.status(429).json({ error: 'Too many requests from this IP, please try again later.' });
  }

  try {
    const { name, email, phone, company, role, purpose, credentials, message, honeypot } = req.body;

    // Honeypot check
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
      const { data, error } = await resend.emails.send({
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
}
