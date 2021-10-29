import { LevelEnum } from "./Level";
import ITranslatable from '../util/Translatable';

export enum SkillType {
  LANGUAGE = "language",
  SOFTWARE = "software",
  METHODOLOGY = "methodology",
  TECHNICAL = "technical",
  PROGRAMMING = "programming",
}

export interface ISkill extends ITranslatable {
  name: ITranslatable,
  level: LevelEnum,
  type: SkillType
}