import {Container} from "inversify";
import {ILogger} from "./services/Logger/interface/ILogger";
import {Logger} from "./services/Logger/classes/Logger";
import {Application} from "./Application";
import {DependencyIdentifier} from "./DependencyIdentifiers";

/*
 * Create the DI container.
 */
const container = new Container({
    defaultScope: "Singleton",
});

/*
 * Register dependencies in DI environment.
 */
container.bind<ILogger>(DependencyIdentifier.LOGGER).to(Logger);


/*
 * Inject all dependencies in the application & retrieve application instance.
 */
const app = container.resolve(Application);

/*
 * Start the application
 */
app.start();
