import { LevelEnum } from "./Level";
import ITranslatable from '../util/Translatable';
export declare enum SkillType {
    LANGUAGE = "language",
    SOFTWARE = "software",
    METHODOLOGY = "methodology",
    TECHNICAL = "technical",
    PROGRAMMING = "programming"
}
export interface ISkill extends ITranslatable {
    name: string;
    level: LevelEnum;
    type: SkillType;
}
//# sourceMappingURL=Skill.d.ts.map