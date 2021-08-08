import Joi from 'joi';

export const textSchema = Joi.object({
  text: Joi.string()
    .required()
    .min(2)
    .max(10000)
    .trim()
    .messages({
      'string.base': `"text" should be a type of 'text'`,
      'string.min': `"text" should have a minimum length of {#limit}`,
      'string.empty': `"text" cannot be an empty field`,
      'any.required': `"text" is a required`,
    }),
});
