const { Resend } = require('resend');
const { config } = require('../config/email.config');
const nodemailer = require('nodemailer')
const fs = require('fs')
// const html  = require('../utils/')
class MailService {

  constructor() {
    // this.resend = new Resend(config.resendApiKey)

  }
  async send() {
    // await this.resend.emails.send({
    //   from: 'Acme <onboarding@resend.dev>',
    //   to:['gabriel.cerda.m@gmail.com'],
    //   subject: 'hello world',
    //   html: '<p>it works!</p>',
    // });
    // Generate SMTP service account from ethereal.email
    try {
      const testAccount = await nodemailer.createTestAccount()
      console.log({testAccount});

      const transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      })

      // Message object

      // create a read stream is not secure because the process still open and it close need be manual.
      const htmlstream = fs.createReadStream('./utils/sendemail.html')

      let message = {
        from: 'Sender Name <sender@example.com>',
        to: 'Recipient <gabriel.cerda.m@gmail.com>',
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        // html: '<p><b>Hello</b> to myself!</p>',
        html: htmlstream
      };

      const info = await transporter.sendMail(message)

      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      return true
    } catch (error) {
      console.log({ error });
      return error
    }
  }
}

module.exports = MailService
