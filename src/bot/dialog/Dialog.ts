import { IMessage, ITextMessage } from './Message'
import { IConversation } from './Conversation';
import { INLP } from './NLP';

export interface IDialogRequest {
  message: ITextMessage;
  conversation_id: string;
  language?: string;
  memory?: any
}

export interface IDialogResponse {
  results: {
    nlp: INLP;
    messages: IMessage<any>[];
    conversation: IConversation;
    logs: any,
    qna: any,
    fallback: any
  }
  message: string
}

export class DialogRequest {
}