import { injectable } from "inversify";
import { IAuctionProcessor } from "../interface";
import { IAuction } from "../../CarOnSaleClient/interface";

@injectable()
export class AuctionProcessor implements IAuctionProcessor {

    public constructor() { }

    public getAverageNumberOfBids(auctions: IAuction[]): number {

        let averageNumberOfBids = 0;
        let allBids = 0;

        auctions.forEach((auction) => {
            allBids += auction.numBids;
        });

        if (allBids > 0) {
            averageNumberOfBids = allBids / auctions.length;
        }

        return averageNumberOfBids;
    }

    public getAverageAuctionProgressPercentage(auctions: IAuction[]): number {
        let averageAuctionProgressPercentage = 0;
        let allAuctionProgressPercentage = 0;

        auctions.forEach((auction) => {
            // Calcualte the progress percentage for each auction.
            allAuctionProgressPercentage +=
                this.calculatePercentageRatio(auction.currentHighestBidValue, auction.minimumRequiredAsk);
        });

        if (allAuctionProgressPercentage > 0) {
            averageAuctionProgressPercentage = allAuctionProgressPercentage / auctions.length;
        }

        return averageAuctionProgressPercentage;

    }

    public calculatePercentageRatio(fromVal: number, divisor: number): number {
        let progressPercentage = 0;

        if (fromVal >= divisor || divisor === 0) {
            progressPercentage = 100;
        } else {
            progressPercentage = fromVal / divisor * 100;
        }

        return progressPercentage;
    }

}
