import { Schema } from 'mongoose';

import { connection } from '../connections';

import { Sentence as SentenceModel } from '../models/sentence.model';

const sentenceSchema = new Schema<SentenceModel>(
  {
    value_en: { type: String, required: true },
    value: { type: String, required: true },
  },
  { timestamps: true }
);

export default connection.model<SentenceModel>('Sentence', sentenceSchema);
