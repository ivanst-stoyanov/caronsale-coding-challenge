import {inject, injectable} from "inversify";
import {ILogger} from "./services/Logger/interface/ILogger";
import {DependencyIdentifier} from "./DependencyIdentifiers";
import "reflect-metadata";

@injectable()
export class Application {

    public constructor(@inject(DependencyIdentifier.LOGGER) private logger: ILogger) {
        // TODO
    }

    public start() {

        this.logger.log(`Application started.`);

    }

}