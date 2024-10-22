import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ error: 'Email and message are required.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.RECEIVING_EMAIL,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.RECEIVING_EMAIL,
      to: process.env.RECEIVING_EMAIL,
      subject: `New message from ${email}`,
      text: message,
      replyTo: email,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: 'Message sent successfully!' });
    } catch (error) {
      console.error('Failed to send message', error);
      return res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
