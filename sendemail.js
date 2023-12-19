const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: '2733287749@qq.com',
    pass: 'vmzxgybmqgdrddbe',
  },
})

async function sendEmail(to, subject, text) {
  const mailOptions = {
    from: '2733287749@qq.com',
    to: to,
    subject: subject,
    text: text,
  }
  try {
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
  } catch (error) {
    console.error('error sending email:', error)
  }
}

module.exports = { sendEmail }
