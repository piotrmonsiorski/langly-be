import express from 'express';

import sentencesGet from '../controllers/sentences/sentencesGet';
import sentencesAdd from '../controllers/sentences/sentencesAdd';
import sentencesRemoveAll from '../controllers/sentences/sentencesRemoveAll';

const router = express.Router();

router.get('/', sentencesGet);
router.post('/', sentencesAdd);
router.delete('/', sentencesRemoveAll);

export default router;
