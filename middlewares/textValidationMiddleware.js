import { textSchema } from '../validators/joiTextSchema.js';
import { HttpCodes } from '../constants/httpCodes.js';

export const textValidationMiddleware = (req, res, next) => {
  const { error } = textSchema.validate(req.body);
  const valid = error == null;

  if (!valid) {
    const { details } = error;
    const message = details.map((i) => i.message)
      .join(',');
    const capitalizeMessage = (
      message && message[1].toUpperCase() + message.slice(2)
    ).replace(/['"]/g, '');

    return res.status(HttpCodes.BAD_REQUEST)
      .json(capitalizeMessage);
  }

  next();
};
