import ITranslatable from '../util/Translatable';
export declare enum ContactType {
    EMAIL = "email",
    POST = "post",
    PHONE = "phone",
    SOCIAL_NETWORK = "social_network"
}
export declare enum SocialNetwork {
    FACEBOOK = "facebook",
    GITHUB = "github",
    LINKEDIN = "linkedin"
}
export interface IAddress {
    line1: string;
    line2: string;
    zipCode: string;
    city: string;
    cityCode: string;
    country: string;
    countryCode: string;
}
export interface IContact {
    type: ContactType;
    name: ITranslatable;
}
export interface IContactPhone extends IContact {
    countryCode: string;
    number: string;
}
export interface IContactPost extends IContact, IAddress {
}
export interface IContactEmail extends IContact {
    email: string;
}
export interface IContactSocialNetwork extends IContact {
    networkName: SocialNetwork;
    profile: string;
}
//# sourceMappingURL=Contact.d.ts.map