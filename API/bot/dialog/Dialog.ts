import { IMessage, ITextMessage } from './Message'
import { IConversation } from './Conversation';
import { INLP } from './NLP';

export interface DialogRequest {
  message: ITextMessage;
  conversation_id: string;
  language: string;
  memory: any
}

export interface DialogResponse {
  message: IMessage<any>;
  conversation: IConversation;
  nlp: INLP;
}