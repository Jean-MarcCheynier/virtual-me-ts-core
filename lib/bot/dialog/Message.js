"use strict";
exports.__esModule = true;
exports.ImageMessage = exports.ListMessage = exports.CarouselMessage = exports.QuickRepliesMessage = exports.CardMessage = exports.TextMessage = exports.RecipientType = exports.MessageType = void 0;
var MessageType;
(function (MessageType) {
    MessageType["TEXT"] = "text";
    MessageType["CARD"] = "card";
    MessageType["QUICK_REPLIES"] = "quickReplies";
    MessageType["BUTTONS"] = "buttons";
    MessageType["CAROUSEL"] = "carousel";
    MessageType["LIST"] = "list";
    MessageType["PICTURE"] = "picture";
    MessageType["CUSTOM"] = "custom";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var RecipientType;
(function (RecipientType) {
    RecipientType["BOT"] = "bot";
    RecipientType["USER"] = "user";
    RecipientType["SYSTEM"] = "system";
})(RecipientType = exports.RecipientType || (exports.RecipientType = {}));
var TextMessage = /** @class */ (function () {
    function TextMessage(content) {
        this.type = MessageType.TEXT;
        this.content = content;
    }
    return TextMessage;
}());
exports.TextMessage = TextMessage;
var CardMessage = /** @class */ (function () {
    function CardMessage(content) {
        this.type = MessageType.CARD;
        this.content = content;
    }
    return CardMessage;
}());
exports.CardMessage = CardMessage;
var QuickRepliesMessage = /** @class */ (function () {
    function QuickRepliesMessage(content) {
        this.type = MessageType.QUICK_REPLIES;
        this.content = content;
    }
    return QuickRepliesMessage;
}());
exports.QuickRepliesMessage = QuickRepliesMessage;
var CarouselMessage = /** @class */ (function () {
    function CarouselMessage(content) {
        this.type = MessageType.CAROUSEL;
        this.content = content;
    }
    return CarouselMessage;
}());
exports.CarouselMessage = CarouselMessage;
var ListMessage = /** @class */ (function () {
    function ListMessage(content) {
        this.type = MessageType.LIST;
        this.content = content;
    }
    return ListMessage;
}());
exports.ListMessage = ListMessage;
var ImageMessage = /** @class */ (function () {
    function ImageMessage(content) {
        this.type = MessageType.LIST;
        this.content = content;
    }
    return ImageMessage;
}());
exports.ImageMessage = ImageMessage;
