import { IAddress, IContact } from "./Contact";
import ITranslatable from '../util/Translatable';
export interface IInfo {
    name: string;
    surname: string;
    dateOfBirth: string;
    citizenship: ITranslatable;
    citizenshipLOCCODE: string;
    contact: [IContact];
    address: IAddress;
}
//# sourceMappingURL=Info.d.ts.map