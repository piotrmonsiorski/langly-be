import express from 'express';

import wordsGet from '../controllers/words/wordsGet';
import wordsAdd from '../controllers/words/wordsAdd';
import wordsRemoveAll from '../controllers/words/wordsRemoveAll';

const router = express.Router();

router.get('/:category', wordsGet);
router.post('/', wordsAdd);
router.delete('/', wordsRemoveAll);

export default router;
