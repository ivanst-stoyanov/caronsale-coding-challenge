import { IAuction } from "../../CarOnSaleClient/interface";

export interface IAuctionProcessor {
    getAverageNumberOfBids(auctions: IAuction[]): number;

    getAverageAuctionProgressPercentage(auctions: IAuction[]): number;
}
