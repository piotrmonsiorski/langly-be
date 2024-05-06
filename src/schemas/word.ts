import { Schema } from 'mongoose';

import { connection } from '../connections';

import { Word as WordModel, WordValue } from '../models/word.model';

const wordValueSchema = new Schema<WordValue>({
  word: { type: String },

  singular: { type: String },
  plural: { type: String },

  male: { type: String },
  female: { type: String },

  infinitive: { type: String },
  singular_first: { type: String },
  singular_second: { type: String },
  singular_third: { type: String },
  plural_first: { type: String },
  plural_second: { type: String },
  plural_third: { type: String },
});

const wordSchema = new Schema<WordModel>(
  {
    type: {
      type: String,
      required: true,
      enum: ['word', 'plural', 'adj', 'verb'],
    },
    category: { type: String, required: true },
    value_en: { type: String, required: true },
    value: { type: wordValueSchema, required: true },
    language: {
      id: { type: String, required: true, enum: ['en', 'es'] },
      level: { type: Number, required: true, enum: [1, 2, 3] },
    },
    imageSrc: { type: String },
    difficulty: { type: Number, enum: [0, 1, 2, 3] },
  },
  { timestamps: true }
);

export default connection.model<WordModel>('Word', wordSchema);
