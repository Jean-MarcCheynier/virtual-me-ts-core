import { ISkill } from ".";
import ITranslatable from "../util/Translatable";

export interface IExperience {
  title: ITranslatable,
  from: string,
  to: string,
  company: {
    logo: string
    name: string;
    type: string;
    translation: ITranslatable
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
  description: ITranslatable,
  skills: ISkill[]
}