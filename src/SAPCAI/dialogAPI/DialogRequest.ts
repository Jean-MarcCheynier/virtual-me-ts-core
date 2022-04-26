import { ClientInfo } from "./ClientInfo";
import { IMessage } from "./contents/Message";

export type DialogRequest = {
  client_info?: ClientInfo;
  conversation_id: string;
  message: IMessage<any>;
  language?: string;
  memory?: any;
};
