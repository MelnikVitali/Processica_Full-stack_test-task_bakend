import { Router } from 'express';

import { textValidationMiddleware } from './middlewares/textValidationMiddleware.js';

import WordsController from './controllers/WordsController.js';

const router = new Router();

router.post('/words', textValidationMiddleware, WordsController.create);

export default router;
