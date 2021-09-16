export declare enum ButtonType {
    POSTBACK = "postback",
    WEB_URL = "web_url",
    PHONE_NUMBER = "phonenumber",
    TRIGGER_SKILL = "trigger_skill"
}
export interface IButton {
    title: string;
    value: string;
    type?: ButtonType;
}
export interface IButtonContent {
    title: string;
    buttons: IButton[];
}
//# sourceMappingURL=Button.d.ts.map