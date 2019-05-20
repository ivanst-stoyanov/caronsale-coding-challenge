import { expect } from "chai";
import { setupRecorder } from "nock-record";
import { Container } from "inversify";
import "reflect-metadata";
import dotenv from "dotenv";

import { AuctionProcessor } from "./AuctionProcessor";
import { IAuctionProcessor } from "../interface";
import { IAuction, IAuthenticationRequest, IAuthenticationResult } from "../../CarOnSaleClient/interface";
import { DependencyIdentifier } from "../../../DependencyIdentifiers";

const record = setupRecorder();

describe("AuctionProcessor Tests", () => {
    dotenv.config();

    const container = new Container({
        defaultScope: "Singleton",
    });

    /*
     * Register dependencies in DI environment.
     */
    container.bind<IAuctionProcessor>(DependencyIdentifier.AUCTION_PROCESSOR).to(AuctionProcessor);

    let auctionProcessor: IAuctionProcessor;
    let auctions: IAuction[];

    beforeEach(() => {
        auctions = [{
            id: 1,
            numBids: 2,
            currentHighestBidValue: 300,
            minimumRequiredAsk: 5000,
        },
        {
            id: 2,
            numBids: 0,
            currentHighestBidValue: 0,
            minimumRequiredAsk: 6000,
        },
        {
            id: 3,
            numBids: 1,
            currentHighestBidValue: 9000,
            minimumRequiredAsk: 5000,
        },
        ];

        auctionProcessor = container.get<IAuctionProcessor>(DependencyIdentifier.AUCTION_PROCESSOR);
    });


    it("Should Calculate Average Number Of Bids", async () => {

        const averageNumberOfBids = auctionProcessor.getAverageNumberOfBids(auctions);

        expect(averageNumberOfBids).to.be.equal(1);

    });

    it("Should Calculate Average Auction Number Percentage", async () => {

        const averageAuctionProgressPercentage = auctionProcessor.getAverageAuctionProgressPercentage(auctions);

        expect(averageAuctionProgressPercentage.toFixed(2)).to.be.equal('35.33');

    });
});
