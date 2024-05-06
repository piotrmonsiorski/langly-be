import { Request, Response } from 'express';

import { WordSchema } from '../../schemas';

const wordsGet = async (req: Request, res: Response) => {
  const category = req.params.category;

  console.log('category: ', category);

  try {
    const words = await WordSchema.find({ category });

    res.status(200).json({
      words,
    });
  } catch (error) {
    res.status(404).json({ message: 'error fetching data', error });
  }
};

export default wordsGet;
