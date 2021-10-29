
import ITranslatable from '../util/Translatable';

export interface IDegree {
  from: string;
  to: string;
  school: {
    name: string;
    type: string;
    translation: {
      en: string,
      fr: string
    } 
  }
  adress: {
    line1: string;
    line2: string;
    zipCode: string,
    city: string,
    cityCode: string,
    country: string,
    countryCode: string
  }
}