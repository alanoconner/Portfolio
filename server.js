// server.js
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());

// Serve Vite.js app in production
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, 'dist')));
// } else {
//     // Dev server setup
//     const vite = require('vite');
//
//     (async () => {
//         const viteInstance = await vite.createServer({
//             server: { middlewareMode: 'ssr' },
//         });
//
//         app.use(viteInstance.middlewares);
//     })();
// }


app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const {name, email, message} = req.body;


    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });


    // Email options
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'akhmadullin01@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    try {
        // Send email using async/await
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.response);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send(error.toString());
    }
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

