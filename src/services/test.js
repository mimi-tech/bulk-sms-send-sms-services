// const fs = require('fs');
// const nodemailer = require("nodemailer");
// const Vonage = require('@vonage/server-sdk')


// const { constants } = require("../configs");

// const apiKey= process.env.MAILGUN_PRIVATE_KEY;
// const domain = process.env.MAILGUN_DOMAIN_NAME;
// const mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain});
 
// const { user, message, subject } = params
  

//   //Define the email options
//   const mailOptions = {
//     from: `EasyHomes <${process.env.EMAIL_FROM}>`,
//     to: user,
//     subject: subject,
//     text: message.toString(),
//   }


// /**
//  *
//  * @param { subject, message, email } subjectobject file object that will be uploaded
//  * @description - This function does the following to send mail to emails
 
//  */

// const sendMail = async (params) => {
//   try {
    

//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.EMAIL,
//         pass: process.env.WORD,
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//       },
//      });
//      transporter.verify((err, success) => {
//       err
//         ? console.log(err)
//         : console.log(`=== Server is ready to take messages: ${success} ===`);
//      });


//      let mailOptions = {
//       from: process.env.EMAIL,
//       to:  params.email,
//       subject: params.subject,
//       html: params.message,
//     };
   
//     transporter.sendMail(mailOptions, function (err, data) {
//       if (err) {
//         res.json({
//           status: "fail",
//         });
//       } else {
//         console.log("== Message Sent ==");
//         res.json({
//           status: "success",
//         });

//         return {
//           status: true,
      
//           message: 'Mail sent successfully',
//         };
//       }
//     });

    


//   } catch (error) {
//     console.log(error);
//     return {
//       status: false,
//       message: constants.SERVER_ERROR('SENDING MAIL'),
//     }
//   }
// };

// /**
//  *
//  * @param { phoneNumber, message } subjectobject file object that will be uploaded
//  * @description - This function does the following to send mail to emails
 
//  */

//  const sendSms = async (params) => {

  

//   try {

//     const {phoneNumber, message} = params;

//     const vonage = new Vonage({
//       apiKey: process.env.NEXMO_API_KEY,
//       apiSecret: process.env.NEXMO_API_SECRET,
//     })
//     const from = process.env.NEXMO_FROM;



//     vonage.message.sendSms(from, phoneNumber, message, (err, responseData) => {
//       if (err) {
//           return {
//               status: false,
//               message: err,
//           };
//       } else {
//           if(responseData.messages[0]['status'] === "0") {
//              console.log("message sent successfully");

//              return {
//               status: true,
//               message: "message sent successfully",
//           };
  
//           } else {
              
//               return {
//                 status: true,
//                 message: `Message failed with error: ${responseData.messages[0]['error-text']}`,
//             };
//           }
//       }
//   })




    
    

//   } catch(error){
//     console.log(error);
//     return {
//       status: false,
//       message: constants.SERVER_ERROR('SENDING SMS'),
//     }
//   }
//   }

// module.exports = {
//   sendMail,
//   sendSms
// };




//nodemailer setup



// const fs = require('fs');
// const Vonage = require('@vonage/server-sdk')

// const nodemailer = require('nodemailer');

//   const { constants } = require("../configs");

  

// const sendMail = async (params) => {
//   try {
//     const { email, message, subject } = params

//       //Define the email options
//   const mailOptions = {
//     from: `EasyHomes <${process.env.EMAIL_FROM}>`,
//     to: email,
//     subject: subject,
//     text: message,
//   }
//     let mailTransporter = nodemailer.createTransport({
      
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//           user: process.env.EMAIL,
//           pass: process.env.WORD
//       }
//   });


   


//    // Then send the email with mailgun service
//    await mailTransporter.sendMail(mailOptions);

//    return{
//     status:true,
//     message:"Email sent successfully"
//   }


//   } catch (error) {
//     console.error(params)
//     console.log(error);
//     return {
//       status: false,
//       message: constants.SERVER_ERROR('SENDING MAIL'),
//     }
//   }
// };

// /**
//  *
//  * @param { phoneNumber, message } subjectobject file object that will be uploaded
//  * @description - This function does the following to send mail to emails
 
//  */

//  const sendSms = async (params) => {

  

//   try {

//     const {phoneNumber, message} = params;

//     const vonage = new Vonage({
//       apiKey: process.env.NEXMO_API_KEY,
//       apiSecret: process.env.NEXMO_API_SECRET,
//     })
//     const from = process.env.NEXMO_FROM;



//     vonage.message.sendSms(from, phoneNumber, message, (err, responseData) => {
//       if (err) {
//           return {
//               status: false,
//               message: err,
//           };
//       } else {
//           if(responseData.messages[0]['status'] === "0") {
//              console.log("message sent successfully");

//              return {
//               status: true,
//               message: "message sent successfully",
//           };
  
//           } else {
              
//               return {
//                 status: true,
//                 message: `Message failed with error: ${responseData.messages[0]['error-text']}`,
//             };
//           }
//       }
//   })




    
    

//   } catch(error){
//     console.log(error);
//     return {
//       status: false,
//       message: constants.SERVER_ERROR('SENDING SMS'),
//     }
//   }
//   }

// module.exports = {
//   sendMail,
//   sendSms
// };
