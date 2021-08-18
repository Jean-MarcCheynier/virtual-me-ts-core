import { IButton } from "./Button";

export enum CardStatusState {
  DEFAULT = "",
  NONE = "none",
  INFO = "information",
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning"
}

export enum CardAttributeType {
  LINK = "link",
  TEXT= "text"
}

export interface ICardSection {
  title: string;
  attributes: {
    label: String,
    type: CardAttributeType,
    value: string
  }[];
}

export interface ICardButton extends IButton{}

export interface ICardContent {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  status: string;
  statusState: CardStatusState,
  sections?: ICardSection[];
  buttons: ICardButton[]
}