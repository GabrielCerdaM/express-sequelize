// const { Resend } = require('resend');
// const { config } = require('../config/email.config');
const nodemailer = require('nodemailer')
const handlebars = require('handlebars')
const fs = require('fs')
// const html  = require('../utils/')
class MailService {

  constructor() {
    // this.resend = new Resend(config.resendApiKey)

  }
  async send(email, token) {
    // await this.resend.emails.send({
    //   from: 'Acme <onboarding@resend.dev>',
    //   to:['gabriel.cerda.m@gmail.com'],
    //   subject: 'hello world',
    //   html: '<p>it works!</p>',
    // });
    // Generate SMTP service account from ethereal.email
    try {
      const testAccount = await nodemailer.createTestAccount()

      // Looking to send emails in production? Check out our Email API/SMTP product!
      // var transport = nodemailer.createTransport({
      //   host: "sandbox.smtp.mailtrap.io",
      //   port: 2525,
      //   auth: {
      //     user: "2d0638dfbcef7d",
      //     pass: "****afdb"
      //   }
      // });

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
      const resetLink = `https://example.com/reset-password?token=${token}`;
      //Cargar la plantilla
      const templatePath = './utils/sendemail.html'
      const templateContent = fs.readFileSync(templatePath, 'utf8')
      //Compilar la planilla
      const template = handlebars.compile(templateContent);

      //Generar html con los datos
      const htmlToSend = template({ email, resetLink })

      let message = {
        from: 'No reply <sender@example.com>',
        to: email,
        subject: 'Restablecimiento de contraseña',
        html: htmlToSend
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
