import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'Souravshakya951@gmail.com',
      subject: `Message from ${name}`,
      text: `Sender Mail Id: ${email} /n Message : ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).send('Failed to send email.');
  }
}