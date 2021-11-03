import { ISkill } from ".";
import ITranslatable from "../util/Translatable";
import { IAddress } from "./Contact";

export interface IExperience {
  title: ITranslatable,
  from: string,
  to: string,
  company: {
    logo: string
    name: string;
    type: string;
    description: ITranslatable
  }
  address: IAddress,
  description: ITranslatable,
  skills: ISkill[]
}