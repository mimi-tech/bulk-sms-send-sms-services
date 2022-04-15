const Joi = require("joi");

module.exports = {
  sendSms: {
    phoneNumber: Joi.string().required(),
    message: Joi.string().required(),
    from: Joi.string(),
  },

  sendMail: {
    message: Joi.string().required(),
    email: Joi.string().required(),
    subject: Joi.string().required(),
  },
};
