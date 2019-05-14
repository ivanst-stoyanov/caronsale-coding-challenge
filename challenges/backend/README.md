# Backend Challenge

Welcome to the CarOnSale backend coding challenge.

In the `/src/app` directory, you find a typescript interface `ICarOnSaleClient` for a service that describes a service to retrieve a list of running auctions from the CarOnSale development API.
Please implement the service and use the "salesman" (buyer) user with the mail ID "salesman@random.com" and the credentials (password) "123test".

The API is documented here: https://caronsale-backend-service-dev.herokuapp.com/swagger/#/
For instructions on how to hash the authentication token, see ``src/assets/how-to-hash-password.png``.

Please fulfill the following tasks (according to the description above):

0. Create your own custom branch (e.g. "development-john") on the repository
1. Install all Node.js dependencies for the project
2. Implement the ICarOnSaleClient interface in a class with method stubs (no functionality) 
3. Implement Mocha/Chai component tests in the ``/CarOnSaleClient/classes`` directory that test the desired behavior (Tests should be run when executing ``npm test``)
4. Implement the actual service to retrieve the list of running auctions (by using the CarOnSale RESTful API, see Swagger documentation)
5. Come up with an interface definition that you can use to access the response objects of a CarOnSale API call (see TODO tag in `ICarOnSaleClient` and check the Swagger documentation for the response objects).
6. Register your service to the dependency injection container in ``main.ts``
7. Integrate your service into the application: If the application runs, the service should be used to retrieve running auctions from the CarOnSale API, display the number of auctions, average number of bids on an auction as well as the average percentage of the auction progress (ratio of current highest bid value and minimum required ask) and the exit with exit code 0. If the service is failing, the process should be quit with exit code -1.
8. Commit and push everything to your branch
9. Inform fabian.roth@caronsale.de that you finished the challenge :)

Additional Hints:

 * You can run the application by running ``npm start``.
 * You can run all tests in the project directory by running ``npm test``
 * Please make sure, code quality is ensured (i.e. validating against the tslint file is not failing).
 * Please focus on correct and uniform formatting.
 * Be sure to use clear commit messages.
 * You can add as many (e.g. static or helper) classes as you want.
 * You can install any additional npm packages.
 
If you have any questions, feel free to contact Fabian Roth via fabian.roth@caronsale.de
 