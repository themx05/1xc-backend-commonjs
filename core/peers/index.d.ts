import { ScopedRole } from "../roles";
import { AccessToken } from "..";
export declare const SESSION_TOKEN_PREFIX = "ses__";
export declare const UAT_TOKEN_PREFIX = "uat__";
export interface ServiceMetadata {
    name: string;
    signature: string;
    host: string;
    port: number;
}
export declare type TokenType = "user" | "admin";
export interface TokenData {
    type: TokenType;
    method: "ses" | "uat";
}
export interface UserSESData extends TokenData {
    type: "user";
    method: "ses";
    userId: string;
    firstName: string;
    lastName: string;
}
export interface UserUATData extends TokenData {
    type: "user";
    method: "uat";
    mode?: "read" | "write" | "both";
    userId: string;
    firstName: string;
    lastName: string;
    token: AccessToken;
}
export interface AdminTokenData extends TokenData {
    type: "admin";
    method: "ses";
    userId: string;
    firstName: string;
    lastName: string;
    roles: ScopedRole[];
}
export declare type PeerType = "service" | TokenType;
export interface BasePeer {
    type: PeerType;
    data: any;
}
interface ServicePeer extends BasePeer {
    type: "service";
    data: ServiceMetadata;
}
interface UserPeer extends BasePeer {
    type: "user";
    data: UserSESData | UserUATData;
}
interface AdminPeer extends BasePeer {
    type: "admin";
    data: AdminTokenData;
}
export declare type Peer = ServicePeer | UserPeer | AdminPeer;
export {};
