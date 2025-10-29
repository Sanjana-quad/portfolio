// api/send-resume.js

import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Recipient email required' });
  }

  try {
    // Path to your resume file in /public
    const resumePath = path.join(process.cwd(), 'public', 'resume.pdf');
    const resumeBuffer = fs.readFileSync(resumePath);

    const response = await resend.emails.send({
      from: 'Sanjana Satheesh <onboarding@resend.dev>', // or your verified sender
      to: email,
      subject: 'Here’s my Resume – Sanjana Satheesh',
      text: 'Thank you for your interest! My resume is attached below.',
      attachments: [
        {
          filename: 'Sanjana_Satheesh_Resume.pdf',
          content: resumeBuffer.toString('base64'),
          type: 'application/pdf',
        },
      ],
    });

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
