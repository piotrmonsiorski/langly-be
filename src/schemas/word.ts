import { Schema } from 'mongoose';

import { connection } from '../connections';

import { Word as WordModel } from '../models/word.model';

const wordSchema = new Schema<WordModel>(
  {
    type: {
      type: String,
      required: true,
      enum: ['word', 'plural', 'adj', 'verb'],
    },
    value_en: { type: String, required: true },
    value: { type: Object, required: true },
    language: { type: Number, required: true, enum: ['en', 'es'] },
    imageSrc: { type: String },
    difficulty: { type: Number, enum: [0, 1, 2, 3] },
  },
  { timestamps: true }
);

export default connection.model<WordModel>('Word', wordSchema);
