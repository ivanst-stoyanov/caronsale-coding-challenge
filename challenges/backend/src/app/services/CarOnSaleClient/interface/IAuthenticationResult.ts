export interface IAuthenticationResult {
    userId: string;
    authenticated: boolean;
    token: string;
    type: number;
    privileges: string;
}
