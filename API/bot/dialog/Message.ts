import { ICardContent } from './contents/Card';
import { IButtonContent } from './contents/Button';
import { IQuickReplyContent } from './contents/QuickReply';
import { ICarouselContent } from './contents/Carousel';
import { IListContent } from './contents/List';

export enum MessageType {
  TEXT = 'text',
  CARD = 'card',
  CAROUSEL = 'carousel',
  LIST = 'list',
  PICTURE = 'picture',
  CUSTOM = 'custom'
}

export interface IMessage<E> {
  type: MessageType;
  content: E;
  markdown?: boolean | string,
  delay?: number | string
}

export interface ITextMessage extends IMessage<string> { }
export interface ICardMessage extends IMessage<ICardContent> { }
export interface IButtonsMessage extends IMessage<IButtonContent> { }
export interface IQuickRepliesMessage extends IMessage<IQuickReplyContent> { }
export interface ICarouselMessage extends IMessage<ICarouselContent> { }
export interface IListMessage extends IMessage<IListContent> { }
export interface IImageMessage extends IMessage<string> { }


