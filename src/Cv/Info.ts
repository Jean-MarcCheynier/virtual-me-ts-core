import { IAddress } from "./Contact";

export interface IInfo {
  name: string;
  surname: string;
  dateOfBirth: string;
  nationality: string;
  nationalityLOCCODE: string;
  contact: []
  address: IAddress
}