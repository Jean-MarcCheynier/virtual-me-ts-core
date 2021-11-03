
import ITranslatable from '../util/Translatable';
import { IAddress } from './Contact';

export interface IDegree {
  title: ITranslatable,
  description: ITranslatable,
  date: string;
  school: {
    name: string;
    type: string;
    translation: {
      en: string,
      fr: string
    } 
  }
  address: IAddress
}