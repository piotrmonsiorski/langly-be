import { Request, Response } from 'express';

import { Sentence as SentenceModel } from '../../models/sentence.model';
import { SentenceSchema } from '../../schemas';

const sentencesAdd = async (req: Request, res: Response) => {
  const newSentence: SentenceModel = req.body.sentence;

  try {
    const _sentence = await SentenceSchema.find({
      value_en: newSentence.value_en,
    });

    if (_sentence.length) {
      return res.status(409).json({
        message: 'sentence already exists',
      });
    }

    await SentenceSchema.create(newSentence);

    res.status(200).json({
      message: 'sentence added successfully',
    });
  } catch (error) {
    res.status(404).json({ message: 'error fetching data', error });
  }
};

export default sentencesAdd;
