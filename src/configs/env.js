const Joi = require('joi');

require('dotenv').config();

const schema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().required(),
  EMAIL: Joi.string().required(),
  WORD: Joi.string().required(),
  NEXMO_API_KEY: Joi.string().required(),
  NEXMO_API_SECRET: Joi.string().required(),
  
  
})
  .unknown()
  .required();

const { error, value: env } = schema.validate(process.env);

if (error) {
  console.error(`Config validation error: ${error.message}`);
  return;
}

const config = {
  env: env.NODE_ENV,
  port: env.PORT,
  sessionSecret: env.SESSION_SECRET,
  dbURL: env.DATABASE_URL,
};

module.exports = config;
