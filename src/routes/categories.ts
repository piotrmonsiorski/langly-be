import express from 'express';

import categoriesGet from '../controllers/categories/categoriesGet';

const router = express.Router();

router.get('/', categoriesGet);

export default router;
