import { Request, Response } from 'express';
import { categories } from '../../consts/categories';

const wordsGet = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      categories,
    });
  } catch (error) {
    res.status(404).json({ message: 'error fetching data', error });
  }
};

export default wordsGet;
