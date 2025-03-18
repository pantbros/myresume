import nodemailer from 'nodemailer';

// Initialize transporter using environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail', // or any email service provider
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
    },
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Retrieve form data from the request body
        const { name, email, phone, location, message } = req.body;

        if (!name || !email || !phone || !location || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender email
            to: process.env.EMAIL_USER,   // Receiver email (for now, same as sender)
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nMessage: ${message}`,
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            return res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to send email', details: error.message });
        }
    } else {
        // Reject any methods other than POST
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
