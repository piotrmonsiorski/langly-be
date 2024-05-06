import express from 'express';

import wordsGet from '../controllers/words/wordsGet';
import wordsAdd from '../controllers/words/wordsAdd';

const router = express.Router();

router.get('/', wordsGet);
router.post('/', wordsAdd);

export default router;
