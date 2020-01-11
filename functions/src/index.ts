const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});
exports.sendEmail = functions.firestore
  .document('contactMessage/{id}')
  .onCreate((snap: any, context: any) => {

    const createdData = snap.data();
    const contactFormName = createdData.contactFormName;
    const contactFormEmail = createdData.contactFormEmail;
    const contactFormAdresse = createdData.contactFormAdresse;
    const contactFormMessage = createdData.contactFormMessage;
    const contactFormPhone = createdData.contactFormPhone;
    const contactDate = createdData.date;

    const mailOptions = {
      from: `***********`,
      to: gmailEmail,
      subject: 'Une nouvelle demande de devis provenant de votre site web',
      html: `
              <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <h1>Nouvelle demande de devis</h1>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <h2>Demande:</h2>
                    <p><strong>Nom: </strong>${contactFormName}</p>
                    <p><strong>Adresse: </strong>${contactFormAdresse}</p>
                    <p><strong>Email: </strong>${contactFormEmail}</p>
                    <p><strong>Téléphone: </strong>${contactFormPhone}</p>
                    <p><strong>Message: </strong></p><p>${contactFormMessage}</p>
                    <p><strong>Date de la demande: </strong>${contactDate}</p>
                  </td>
                </tr>
               </table>
            `
    };
    return transporter.sendMail(mailOptions, (error: any, data: any) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log('Sent!');
    });
  });

