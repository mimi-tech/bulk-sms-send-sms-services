const { message } = require('../services');
const { response } = require('../helpers');

const sendMail = async (req, res) => {
  const data = await message.sendMail(req.form);
  return response(res, data);
};

const sendSms = async (req, res) => {
  const data = await message.sendSms(req.form);
  return response(res, data);
};


module.exports = {
  sendMail,
  sendSms,
};
