import { Language } from './language.model';

export type WordType =
  | 'word' // simple word
  | 'plural' // singular + plural form
  | 'adj' // male + female version
  | 'verb'; // main form + 6 person forms

export type WordDifficulty = 0 | 1 | 2 | 3;

export type WordValue = Partial<{
  word: string;
  singular: string;
  plural: string;
  male: string;
  female: string;
  infinitive: string;
  singular_first: string;
  singular_second: string;
  singular_third: string;
  plural_first: string;
  plural_second: string;
  plural_third: string;
}>;

export type Word = {
  type: WordType;
  value_en: string;
  value: WordValue;
  language: Language;
  imageSrc?: string;
  difficulty: WordDifficulty;
  category: string;
};

export type WordCategory = {
  id: string;
  label: string;
};
