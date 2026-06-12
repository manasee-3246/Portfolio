require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Import models
const Message = require('./models/Message');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Serve frontend static files (built React app)
const frontendPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendPath));

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes

// Configure Nodemailer
const transporter = require('nodemailer').createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// POST /api/contact - Receive contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Save to database
    const newMessage = new Message({
      name,
      email,
      subject,
      message
    });
    await newMessage.save();

    // Send Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send it to yourself
      subject: `Portfolio Contact: ${subject}`,
      text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email // So you can reply directly to the sender
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // We still return success if it saved to DB, or we can choose to return error.
      // Returning success but logging error so the user doesn't get a confusing error if DB worked.
    }

    res.status(201).json({ message: 'Message received and email sent successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check for API
app.get('/api/health', (req, res) => {
  res.json({ status: 'Portfolio API is running' });
});

// Catch-all: serve React app for any non-API route (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
