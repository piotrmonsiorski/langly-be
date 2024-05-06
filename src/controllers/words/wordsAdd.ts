import { Request, Response } from 'express';

import { Word as WordModel } from '../../models/word.model';
import { WordSchema } from '../../schemas';

const wordsAdd = async (req: Request, res: Response) => {
  const newWord: WordModel = req.body.word;

  console.log('newWord: ', newWord);

  try {
    const word: WordModel = newWord;

    const _word = await WordSchema.find({
      value_en: newWord.value_en,
      type: newWord.type,
      category: newWord.category,
    });

    if (_word.length) {
      res.status(409).json({
        message: 'word already exists',
      });
    }

    await WordSchema.create(word);

    res.status(200).json({
      message: 'word added successfully',
    });
  } catch (error) {
    res.status(404).json({ message: 'error fetching data', error });
  }
};

export default wordsAdd;
