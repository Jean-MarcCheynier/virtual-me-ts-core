import { ISkill } from "./Skill";
import { IDegree } from './Degree';
import { IExperience } from './Experience';
export interface ICv {
    photo: string;
    name: string;
    lastname: string;
    situation: string;
    skills: ISkill[];
    degrees: IDegree[];
    experiences: IExperience[];
}
//# sourceMappingURL=Cv.d.ts.map