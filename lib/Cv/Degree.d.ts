import ITranslatable from '../util/Translatable';
import { IAddress } from './Contact';
export interface IDegree {
    title: ITranslatable;
    description: ITranslatable;
    date: string;
    school: {
        logo: string;
        link: string;
        name: string;
        type: string;
        translation: {
            en: string;
            fr: string;
        };
    };
    address: IAddress;
}
//# sourceMappingURL=Degree.d.ts.map