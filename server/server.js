require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://gola-graphic.netlify.app';

app.use(express.json());
app.use(cors({ origin: CLIENT_ORIGIN }));

// Health check
app.get('/', (req, res) => res.send('OK'));

// POST /send
app.post('/send', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing fields' });
    }

    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });

    const mailOptions = {
      from: `${name} <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `Contact Form Submission: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return res.json({ ok: true });
  } catch (err) {
    console.error('Send error:', err);
    return res.status(500).json({ ok: false, error: err.message || 'Failed to send' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
