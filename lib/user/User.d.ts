import { Role } from "./Role";
export interface IUserSession {
    conversation: {
        conversation_id: string;
    };
    socketId?: string;
}
export interface IUser {
    _id?: any;
    name: string;
    email: string;
    role: Role;
    login: string;
    password?: string;
    session?: IUserSession;
}
//# sourceMappingURL=User.d.ts.map