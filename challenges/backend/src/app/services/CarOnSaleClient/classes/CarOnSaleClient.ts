import { injectable, inject } from "inversify";
import axios from "axios";
import { sha512 } from "js-sha512";
import { ICarOnSaleClient, IAuction, IAuthenticationRequest, IAuthenticationResult } from "../interface";
import { ILogger } from "../../Logger/interface/ILogger";
import { DependencyIdentifier } from "../../../DependencyIdentifiers";

@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {

    private carOnSaleApiUrl = process.env.CAR_ON_SALE_API_URL;

    public constructor(
        @inject(DependencyIdentifier.LOGGER) private logger: ILogger,
    ) { }

    public async getRunningAuctions(authUserData: IAuthenticationResult): Promise<IAuction[]> {
        const url = `${this.carOnSaleApiUrl}/auction/salesman/${authUserData.userId}/_all`;

        const reqOptions = {
            headers: {
                authtoken: authUserData.token,
                userid: authUserData.userId,
            },
        };

        try {
            const auctionsReqData = await axios.get(url, reqOptions);

            return auctionsReqData.data as IAuction[];
        } catch (error) {
            this.logger.log(`Could not get user auctions. ${error}`);

            return Promise.resolve(null);
        }
    }

    public async authenticateUser(userMailId: string, authRequest: IAuthenticationRequest): Promise<IAuthenticationResult> {
        const url = `${this.carOnSaleApiUrl}/authentication/${userMailId}`;

        authRequest.password = this.hashUserPassword(authRequest.password);

        try {
            const userResponse = await axios.put(url, authRequest);

            return userResponse.data as IAuthenticationResult;
        } catch (error) {
            this.logger.log(`Could not authenticate user. ${error}`);

            return Promise.resolve(null);
        }
    }

    private hashUserPassword(password: string): string {

        let numberOfCycles = 1;
        if (process.env.PASSWORD_HASH_NUMBER_OF_CYCLES) {
            numberOfCycles = Number(process.env.PASSWORD_HASH_NUMBER_OF_CYCLES);
        }

        let hash = password;
        for (let i = 0; i < numberOfCycles; i++) {
            hash = sha512(hash);
        }

        return hash;
    }
}
