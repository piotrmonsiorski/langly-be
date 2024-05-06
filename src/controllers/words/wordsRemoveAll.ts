import { Request, Response } from 'express';

import { WordSchema } from '../../schemas';

const wordsRemove = async (req: Request, res: Response) => {
  try {
    await WordSchema.deleteMany({});

    res.status(200).json({
      message: 'all words removed successfully',
    });
  } catch (error) {
    res.status(404).json({ message: 'error fetching data', error });
  }
};

export default wordsRemove;
