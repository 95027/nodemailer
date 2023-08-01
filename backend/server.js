const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendEmail = require('./utils/sendmail');

const app = express();

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors);

//route
app.get("/", (req, res) => {
    res.send("Home page...");
});

app.post("/api/sendmail",async (req, res) => {
    const {email} = req.body;

    try {
        const send_to = email;
        const sent_from = process.env.EMAIL_USER;
        const subject = "thank you";
        const message = `
        <h1>Hello this is from nodemailer</h1>
        `

        await sendEmail(send_to, sent_from, subject, message)
        res.status(200).json({success : true, message : "email sent"});

        
    } catch (error) {
        res.status(500).json(error.message);
    }

})


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}...`);
})