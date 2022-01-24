const { Router } = require('express');
const { message } = require('../controllers');
const { validate } = require("../middlewares");
const { message: validator } = require("../validator");


const routes = Router();



routes.post('/send-email', validate(validator.sendMail), message.sendMail);
routes.post('/send-sms',validate(validator.sendSms), message.sendSms);


module.exports = routes;
