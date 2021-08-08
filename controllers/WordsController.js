import { HttpCodes } from '../constants/httpCodes.js';
import { calculateWords } from '../utils/calculateWords.js';

class WordsController {
  async create(req, res) {
    try {
      const text = req.body.text;

      const words = calculateWords(text);

      const result = {
        words,
        text
      };

      return res.status(HttpCodes.CREATED)
        .json(result);
    } catch (err) {
      return res.status(HttpCodes.INTERNAL_SERVER_ERROR)
        .json(err);
    }
  }
}

export default new WordsController();
