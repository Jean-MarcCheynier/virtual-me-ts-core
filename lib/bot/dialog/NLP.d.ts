import { IIntent } from "./Intent";
export interface INLP {
    uuid: string;
    source: string;
    intents: IIntent[];
    act: string;
    type: string;
    sentiment: string;
    entities: any;
    language: string;
    processing_language: string;
    version: string;
    timestamp: string;
    status: number;
}
//# sourceMappingURL=NLP.d.ts.map