const { Router } = require('express');
const { message } = require('../controllers');
const { validate } = require("../middlewares");
const { message: validator } = require("../validator");


const routes = Router();



routes.post('/send_email', validate(validator.sendMail), message.sendMail);
routes.post('/send_sms',validate(validator.sendSms), message.sendSms);


module.exports = routes;
