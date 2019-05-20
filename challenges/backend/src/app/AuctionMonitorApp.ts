import { inject, injectable } from "inversify";
import { ILogger } from "./services/Logger/interface/ILogger";
import { ICarOnSaleClient, IAuthenticationRequest } from "./services/CarOnSaleClient/interface";
import { IAuctionProcessor } from "./services/Helper/interface";
import { DependencyIdentifier } from "./DependencyIdentifiers";
import "reflect-metadata";

@injectable()
export class AuctionMonitorApp {

    public constructor(
        @inject(DependencyIdentifier.LOGGER) private logger: ILogger,
        @inject(DependencyIdentifier.CAR_ON_SALE_CLIENT) private carOnSaleClient: ICarOnSaleClient,
        @inject(DependencyIdentifier.AUCTION_PROCESSOR) private auctionProcessor: IAuctionProcessor,
    ) {
    }

    public async start(): Promise<void> {

        this.logger.log(`Auction Monitor started.`);

        // Authenticate the user.
        const userMailId = process.env.SALESMAN_USER_EMAIL;
        const userPassword = process.env.SALESMAN_USER_PASSWORD;

        const authRequest: IAuthenticationRequest = {
            password: userPassword,
        };

        const authUserData = await this.carOnSaleClient.authenticateUser(userMailId, authRequest);

        // If the user is authenticated proceed.
        if (authUserData) {

            // Get the running auctions.
            const runningAuctions = await this.carOnSaleClient.getRunningAuctions(authUserData);

            if (runningAuctions) {

                const averageNumberOfBids = this.auctionProcessor.getAverageNumberOfBids(runningAuctions);
                const averageAuctionProgressPercentage = this.auctionProcessor.getAverageAuctionProgressPercentage(runningAuctions);

                this.logger.log(`Number of auctions: ${runningAuctions.length} Average number of bids: ${averageNumberOfBids} ` +
                    `Average auction progress: ${averageAuctionProgressPercentage.toFixed(2)}%`);

                this.logger.log(`Auction Monitor stopped.`);
                process.exit(0);
            }
        }

        process.exit(-1);
    }
}
