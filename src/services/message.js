const fs = require('fs');
const Vonage = require('@vonage/server-sdk')
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const nodemailer = require('nodemailer');

const apiKey= process.env.MAILGUN_PRIVATE_KEY;
const domain = process.env.MAILGUN_DOMAIN_NAME;
const mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain});
 
  const { constants } = require("../configs");
  const service = process.env.EMAIL_PIPE;
  

const sendMail = async (params) => {
  try {
    const { email, message, subject } = params

      //Define the email options
  const mailOptions = {
    from: `Bulk sms <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: subject,
    html: message,
  }
    const mailTransporter = nodemailer.createTransport({
      
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
          user: process.env.EMAIL,
          pass: process.env.WORD
      }
  });


  switch (service) {
    case "production": {
// Then send the email with mailgun service
await mailgun.messages().send(mailOptions);
    
        break;
    }

    case "development": {
await mailTransporter.sendMail(mailOptions)
      break;
    }
    default:
      break;
  }


  
   return{
    status:true,
    message:"Email sent successfully"
  }


  } catch (error) {
    console.error(error)
    console.log(error);
    return {
      status: false,
      message: constants.SERVER_ERROR('SENDING MAIL'),
    }
  }
};

/**
 *
 * @param { phoneNumber, message } subjectobject file object that will be uploaded
 * @description - This function does the following to send mail to emails
 
 */

 const sendSms = async (params) => {

  

  try {
    
    const {phoneNumber, message, from} = params;

    client.messages
    .create({
       body: message,
       from: process.env.TWILIO_PHONE_NUMBER,
       to: phoneNumber
     }).then((message) => {
     
      return {
        status: true,
        message: `message ${message.status} successfully`,
    };
     }).catch((error)=>{
      return {
      status: false,
      message: `${error.message}`,
      }
     })
    //.then(message => console.log(message.sid));



  //   const vonage = new Vonage({
  //     apiKey: process.env.NEXMO_API_KEY,
  //     apiSecret: process.env.NEXMO_API_SECRET,
  //   })

  //   vonage.message.sendSms(from, phoneNumber, message, (err, responseData) => {
  //     if (err) {
  //         return {
  //             status: false,
  //             message: err,
  //         };
  //     } else {
  //         if(responseData.messages[0]['status'] === "0") {
  //            console.log("message sent successfully");

  //            return {
  //             status: true,
  //             message: "message sent successfully",
  //         };
  
  //         } else {
              
  //             return {
  //               status: true,
  //               message: `Message failed with error: ${responseData.messages[0]['error-text']}`,
  //           };
  //         }
  //     }
  // })

  } catch(error){
 
    return {
      status: false,
      message: constants.SERVER_ERROR('SENDING SMS'),
    }
  }
  }

module.exports = {
  sendMail,
  sendSms
};

