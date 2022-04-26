import { IButton } from './Button';
import { ICardContent } from './Card'

export interface IListContent {
  title: string;
  subtitle: string;
  imageUrl: string;
  total: number,
  upperBoundText: string; //LIST_ENDING_INDICATOR_TEXT
  buttons: IButton[],
  elements: ICardContent[]
}