require('dotenv').config()
const nodemailer = require('nodemailer')
const ejs = require('ejs')

// use nodemailer to create transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'techdebee@gmail.com',
        pass: process.env.NODEMAILER_PASS
    }
})

// function to render the email welcome message
async function renderWelcomeMessage (username, user) {
    return await ejs.renderFile('views/welcomeMessage.ejs', {username, user})
}

// function to send mail
async function sendMail (option, res) {
    try {
        // check if there is an email option specified (from the register/createUser controller)
        if (!option) {
            return res.status(400).json({success: false, message: 'Please provide email options'})
        }
        transporter.sendMail(option, (err, info) => {
            if (err) {
                console.log('Error sending mail: ', err.message)
            }
            console.log(info)
        })
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {sendMail, renderWelcomeMessage}
