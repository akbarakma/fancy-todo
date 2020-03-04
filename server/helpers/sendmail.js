require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
function sendmail(email, title) {
    const msg = {
      to: email,
      from: 'akbarajo1234@gmail.com',
      subject: `${title} has been added to your Todos`,
      text: `Your Todo with title ${title} successfully added`
    };
    sgMail.send(msg);
}

module.exports = sendmail;