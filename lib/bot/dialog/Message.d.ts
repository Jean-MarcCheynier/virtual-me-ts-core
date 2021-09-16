import { ICardContent } from './contents/Card';
import { IButtonContent } from './contents/Button';
import { IQuickReplyContent } from './contents/QuickReply';
import { ICarouselContent } from './contents/Carousel';
import { IListContent } from './contents/List';
export declare enum MessageType {
    TEXT = "text",
    CARD = "card",
    QUICK_REPLIES = "quickReplies",
    CAROUSEL = "carousel",
    LIST = "list",
    PICTURE = "picture",
    CUSTOM = "custom"
}
export declare enum RecipientType {
    BOT = "bot",
    USER = "user"
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
    markdown?: boolean | string;
    delay?: number | string;
}
export interface ITextMessage extends IMessage<string> {
}
export interface ICardMessage extends IMessage<ICardContent> {
}
export interface IButtonsMessage extends IMessage<IButtonContent> {
}
export interface IQuickRepliesMessage extends IMessage<IQuickReplyContent> {
}
export interface ICarouselMessage extends IMessage<ICarouselContent> {
}
export interface IListMessage extends IMessage<IListContent> {
}
export interface IImageMessage extends IMessage<string> {
}
export declare class TextMessage implements ITextMessage {
    type: MessageType;
    content: string;
    constructor(content: string);
}
export declare class CardMessage implements ICardMessage {
    type: MessageType;
    content: ICardContent;
    constructor(content: ICardContent);
}
export declare class QuickRepliesMessage implements IQuickRepliesMessage {
    type: MessageType;
    content: IQuickReplyContent;
    constructor(content: IQuickReplyContent);
}
export declare class CarouselMessage implements ICarouselMessage {
    type: MessageType;
    content: ICarouselContent;
    constructor(content: ICarouselContent);
}
export declare class ListMessage implements IListMessage {
    type: MessageType;
    content: IListContent;
    constructor(content: IListContent);
}
export declare class ImageMessage implements IImageMessage {
    type: MessageType;
    content: string;
    constructor(content: string);
}
//# sourceMappingURL=Message.d.ts.map