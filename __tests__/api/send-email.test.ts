import { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/send-email';
import nodemailer from 'nodemailer';

jest.mock('nodemailer');

describe('API Route: /api/send-email', () => {
  let req: NextApiRequest;
  let res: NextApiResponse;

  beforeEach(() => {
    req = {
      method: 'POST',
      body: {},
    } as NextApiRequest;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      setHeader: jest.fn(),
      end: jest.fn(),
    } as unknown as NextApiResponse;

    (nodemailer.createTransport as jest.Mock).mockReturnValue({
      sendMail: jest.fn(),
    });
  });

  test('returns 400 if email or message is missing', async () => {
    req.body = { email: 'test@example.com' };
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Email and message are required.',
    });

    req.body = { message: 'Hello!' };
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Email and message are required.',
    });
  });

  test('sends email successfully', async () => {
    req.body = {
      email: 'test@example.com',
      message: 'Hello!',
    };

    const sendMailMock = jest.fn().mockResolvedValueOnce({});
    (nodemailer.createTransport().sendMail as jest.Mock).mockImplementation(
      sendMailMock
    );

    await handler(req, res);

    expect(sendMailMock).toHaveBeenCalledWith({
      from: process.env.RECEIVING_EMAIL,
      to: process.env.RECEIVING_EMAIL,
      subject: 'New message from test@example.com',
      text: 'Hello!',
      replyTo: 'test@example.com',
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: 'Message sent successfully!',
    });
  });

  test('returns 500 if email sending fails', async () => {
    req.body = {
      email: 'test@example.com',
      message: 'Hello!',
    };

    const sendMailMock = jest
      .fn()
      .mockRejectedValueOnce(new Error('SMTP error'));
    (nodemailer.createTransport().sendMail as jest.Mock).mockImplementation(
      sendMailMock
    );

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Failed to send message' });
  });

  test('returns 405 if method is not POST', async () => {
    req.method = 'GET';
    await handler(req, res);
    expect(res.setHeader).toHaveBeenCalledWith('Allow', ['POST']);
    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.end).toHaveBeenCalledWith('Method GET Not Allowed');
  });
});
