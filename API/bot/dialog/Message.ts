enum MessageType {
  TEXT= 'text'
}

interface IMessage<E> {
  type: MessageType;
  content: E
}

interface ITextMessage extends IMessage<string> {}