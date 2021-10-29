import ITranslatable from '../util/Translatable';
export declare enum LevelEnum {
    JUNIOR = "JUNIOR",
    MEDIOR = "MEDIOR",
    SENIOR = "SENIOR"
}
export interface ILevel extends ITranslatable {
    type: LevelEnum;
}
export declare function getLevel(level: LevelEnum): any;
//# sourceMappingURL=Level.d.ts.map