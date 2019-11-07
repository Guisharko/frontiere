import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

'use strict';

// const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

//to make it work you need gmail account
const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;

admin.initializeApp(functions.config().firebase);

//creating function for sending emails
let goMail = function (contactFormName,contactFormEmail,contactFormAdresse,contactFormPhone,contactFormMessage,contactDate) {
//transporter is a way to send your emails
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    }
  });

  // setup email data with unicode symbols
  //this is how your email are going to look like
  const mailOptions = {
    from: contactFormEmail, // sender address
    to: gmailEmail, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Nom : ' + contactFormName + '<br>'+
      'Adresse : ' + contactFormAdresse + '<br>'+
      'Téléphone : ' + contactFormPhone + '<br>'+
      'Envoyé le :' + contactDate + '<br>'+
      'Message : ' + contactFormMessage,
  };

  //this is callback function to return status to firebase console
  const getDeliveryStatus = function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  };

  //call of this function send an email, and return status
  transporter.sendMail(mailOptions, getDeliveryStatus);
};

//.onDataAdded is watches for changes in database
exports.onDataAdded = functions.database.ref('contactMessage').onCreate(function (snap, context) {

  //here we catch a new data, added to firebase database, it stored in a snap letiable
  const createdData = snap.val();
  let contactFormName = createdData.contactFormName;
  let contactFormEmail = createdData.contactFormEmail;
  let contactFormAdresse = createdData.contactFormAdresse;
  let contactFormMessage = createdData.contactFormMessage;
  let contactFormPhone = createdData.contactFormPhone;
  let contactDate = createdData.date;

  //here we send new data using function for sending emails
  goMail(contactFormName,contactFormEmail,contactFormAdresse,contactFormPhone,contactFormMessage,contactDate);
});
