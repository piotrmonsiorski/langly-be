import { Request, Response } from 'express';

import { SentenceSchema } from '../../schemas';

const sentencesRemoveAll = async (req: Request, res: Response) => {
  try {
    await SentenceSchema.deleteMany({});

    res.status(200).json({
      message: 'all sentences removed successfully',
    });
  } catch (error) {
    res.status(404).json({ message: 'error fetching data', error });
  }
};

export default sentencesRemoveAll;
