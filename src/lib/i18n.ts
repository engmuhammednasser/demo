import { en } from '../dictionaries/en';
import { ar } from '../dictionaries/ar';

export type Locale = 'en' | 'ar';

const dictionaries = {
  en,
  ar,
};

export const getDictionary = async (locale: Locale) => dictionaries[locale] ?? dictionaries.en;
