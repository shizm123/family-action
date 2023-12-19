const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.PASS_WORD
  },
})

async function sendEmail(to, subject, text) {
  const mailOptions = {
    from: process.env.USER_NAME,
    to: to,
    subject: subject,
    text: text
  }
  try {
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
  } catch (error) {
    console.error('error sending email:', error)
  }
}

module.exports = { sendEmail }
