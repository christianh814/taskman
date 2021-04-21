const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = process.env.SENDGRID_TKN

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chernand@redhat.com',
        subject: 'Welcome to Taskman',
        text: `Hi, ${name}! Welcome to the Taskman application!`
    })
}
const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chernand@redhat.com',
        subject: `Goodbye ${name}`,
        text: `Sorry to see you go, ${name}! We'll be here if you change your mind.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}