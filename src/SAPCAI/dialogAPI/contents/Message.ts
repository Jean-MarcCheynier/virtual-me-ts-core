import { ICardContent } from "./Card";
import { IButtonContent } from "./Button";
import { IQuickReplyContent } from "./QuickReply";
import { ICarouselContent } from "./Carousel";
import { IListContent } from "./List";
import { MessageType } from "../enums";

export enum RecipientType {
  BOT = "bot",
  USER = "user",
  SYSTEM = "system",
}

export interface IMessage<E> {
  type: MessageType;
  content: E;
  from?: {
    type: RecipientType;
    channelID?: string;
  };
  to?: {
    type: RecipientType;
    channelID?: string;
  };
  translatable?: boolean;
  markdown?: boolean | string;
  delay?: number | string;
  lang?: string;
}

export interface ITextMessage extends IMessage<string> {}
export interface ICardMessage extends IMessage<ICardContent> {}
export interface IButtonsMessage extends IMessage<IButtonContent> {}
export interface IQuickRepliesMessage extends IMessage<IQuickReplyContent> {}
export interface ICarouselMessage extends IMessage<ICarouselContent> {}
export interface IListMessage extends IMessage<IListContent> {}
export interface IImageMessage extends IMessage<string> {}

export class TextMessage implements ITextMessage {
  public type: MessageType = MessageType.TEXT;
  public content: string;

  constructor(content: string) {
    this.content = content;
  }
}

export class CardMessage implements ICardMessage {
  public type: MessageType = MessageType.CARD;
  public content: ICardContent;

  constructor(content: ICardContent) {
    this.content = content;
  }
}

export class QuickRepliesMessage implements IQuickRepliesMessage {
  public type: MessageType = MessageType.QUICK_REPLIES;
  public content: IQuickReplyContent;

  constructor(content: IQuickReplyContent) {
    this.content = content;
  }
}

export class CarouselMessage implements ICarouselMessage {
  public type: MessageType = MessageType.CAROUSEL;
  public content: ICarouselContent;

  constructor(content: ICarouselContent) {
    this.content = content;
  }
}

export class ListMessage implements IListMessage {
  public type: MessageType = MessageType.LIST;
  public content: IListContent;

  constructor(content: IListContent) {
    this.content = content;
  }
}

export class ImageMessage implements IImageMessage {
  public type: MessageType = MessageType.LIST;
  public content: string;

  constructor(content: string) {
    this.content = content;
  }
}
