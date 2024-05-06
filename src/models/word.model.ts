import { Language } from './language.model';

export type WordType =
  | 'word' // simple word
  | 'plural' // singular + plural form
  | 'adj' // male + female version
  | 'verb'; // main form + 6 person forms

export type WordDifficulty = 0 | 1 | 2 | 3;

interface GenericWord {
  type: WordType;
  value_en: string;
  language: Language;
  imageSrc?: string;
  difficulty: WordDifficulty;
  category: string;
}

interface WordSimple extends GenericWord {
  type: 'word';
  value: string;
}

interface WordPlural extends GenericWord {
  type: 'adj';
  value: {
    singular: string;
    plural: string;
  };
}

interface WordAdjective extends GenericWord {
  type: 'adj';
  value: {
    male: string;
    female: string;
  };
}

interface WordVerb extends GenericWord {
  type: 'verb';
  value: {
    infinitive: string;
    singular_first: string;
    singular_second: string;
    singular_third: string;
    plural_first: string;
    plural_second: string;
    plural_third: string;
  };
}

export type Word = WordSimple | WordPlural | WordAdjective | WordVerb;

export type WordCategory = {
  id: string;
  label: string;
};
