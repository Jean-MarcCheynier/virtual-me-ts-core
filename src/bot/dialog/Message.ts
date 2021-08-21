import { ICardContent } from './contents/Card';
import { IButtonContent } from './contents/Button';
import { IQuickReplyContent } from './contents/QuickReply';
import { ICarouselContent } from './contents/Carousel';
import { IListContent } from './contents/List';

export enum MessageType {
  TEXT = 'text',
  CARD = 'card',
  QUICK_REPLIES = 'quickReplies',
  CAROUSEL = 'carousel',
  LIST = 'list',
  PICTURE = 'picture',
  CUSTOM = 'custom'
}

export enum RecipientType {
  BOT = 'bot',
  USER = 'user'
}

export interface IMessage<E> {
  type: MessageType;
  content: E;
  from?: {
    type: RecipientType,
    channelID?: string
  };
  to?: {
    type: RecipientType,
    channelID?: string
  };
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

export class TextMessage implements ITextMessage {
  public type: MessageType = MessageType.TEXT;
  public content: string;

  constructor(content: string) {
    this.content = content
  }
}

export class CardMessage implements ICardMessage {
  public type: MessageType = MessageType.CARD;
  public content: ICardContent;

  constructor(content: ICardContent) {
    this.content = content
  }
}

export class QuickRepliesMessage implements IQuickRepliesMessage {
  public type: MessageType = MessageType.QUICK_REPLIES;
  public content: IQuickReplyContent;

  constructor(content: IQuickReplyContent) {
    this.content = content
  }
}

export class CarouselMessage implements ICarouselMessage {
  public type: MessageType = MessageType.CAROUSEL;
  public content: ICarouselContent;

  constructor(content: ICarouselContent) {
    this.content = content
  }
}

export class ListMessage implements IListMessage {
  public type: MessageType = MessageType.LIST;
  public content: IListContent;

  constructor(content: IListContent) {
    this.content = content
  }
}

export class ImageMessage implements IImageMessage {
  public type: MessageType = MessageType.LIST;
  public content: string;

  constructor(content: string) {
    this.content = content
  }
}


