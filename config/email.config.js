require('dotenv').config()

const config = {
  resendApiKey: process.env.RESEND_SECRET
}

module.exports = { config }
