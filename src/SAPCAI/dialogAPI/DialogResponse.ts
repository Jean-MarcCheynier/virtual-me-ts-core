import { ClientInfo } from "./ClientInfo";
import { Entity } from "./analyse/Entity";
import { Sentiment } from "./enums/Sentiment";
import { Intent } from "./analyse/Intent";
import { ISO6391 } from "./ISO6391";
import { IMessage } from "./contents/Message";

export type DialogResponse = {
  results: {
    messages: IMessage<any>[];
    conversation: {
      id: string;
      client_info?: ClientInfo;
      language?: string;
      memory?: any;
      initial_context?: any;
      skill: string;
      skill_occurences: number;
    };
    nlp: {
      uuid: string;
      source: string;
      intents: Intent[];
      sentiment: Sentiment;
      entities: Entity[];
      language: ISO6391;
      processing_language: ISO6391;
      version: string;
      timestamp: string;
      status: string;
    };
  };
  message: string;
};
