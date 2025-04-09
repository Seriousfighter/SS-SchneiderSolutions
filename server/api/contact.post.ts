// server/api/contact.post.ts
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  try {
    // Get form data from request
    const body = await readBody(event);
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return {
        success: false,
        message: 'Missing required fields'
      };
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD // Use app password, not your regular Gmail password
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: email, // Allow replying directly to the sender
      subject: `SS-SCHNEIDER SERVICES Contact Form: ${name}`,
      html: `
        <h2>Contacto Desde SS-SchneiderServices</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: 'Email sent successfully'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send email'
    };
  }
});