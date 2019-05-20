import { IAuthenticationResult, IAuthenticationRequest, IAuction } from ".";

/**
 * This service describes an interface to access auction data from the CarOnSale API.
 */

export interface ICarOnSaleClient {

    getRunningAuctions(authUserData: IAuthenticationResult): Promise<IAuction[]>;

    authenticateUser(userMailId: string, authRequest: IAuthenticationRequest): Promise<IAuthenticationResult>;
}
