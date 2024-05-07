import { Request, Response } from 'express';

import { SentenceSchema } from '../../schemas';

const sentencesGet = async (req: Request, res: Response) => {
  try {
    const sentences = await SentenceSchema.find();

    res.status(200).json({
      sentences,
    });
  } catch (error) {
    res.status(404).json({ message: 'error fetching data', error });
  }
};

export default sentencesGet;
