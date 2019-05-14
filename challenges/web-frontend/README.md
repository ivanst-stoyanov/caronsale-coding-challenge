# Web Frontend Challenge

Welcome to the CarOnSale Web Frontend Coding Challenge.

To assess your skills and knowledge about the relevant technologies, we want you to build us a simple user interface for our backend service.

Your Task:

Build a simple Angular (v6 or v7) application that includes:
- Login Page to login registered buyers („salesman“ or "buyer" users). If a Non-Buyer registers, an error message should pop up.
- Overview Page (only for logged in buyers) to display all running auctions (updated every 20 seconds), including
   - vehicle image thumbnail (vehicle images may not show actual vehicles cars on our DEV platform, but only test images)
   - basic vehicle information („Erstzulassung“/EZ, Mileage, Fuel Type, Transmission)
   - current highest bid value in Euro
   - remaining time in format „00h:00m:00s“
   - information whether the logged in buyer is the highest bidder on an auction
   
Please create a custom branch for you (e.g. "development-john") and create the Angular project in the directory of this README.

Your Resources:

You can find the Swagger documentation of our REST API here (The „Authorize“ feature of Swagger is not working with our API):
https://caronsale-backend-service-dev.herokuapp.com/swagger/#/

For details on how to authenticate to the system, check out the code excerpt in ``challenges/assets/how-to-hash-password.png``.

Apart from that, be sure to check out the Angular and TypeScript documentations.

The base URL of our REST service is ``https://caronsale-backend-service-dev.herokuapp.com/api/v1``.


General Hints:

- The „User ID“ for REST calls is not the internal „id“ of a user, but the „mailAddress“.
- You don’t need to register new users, existing test accounts are
   - Salesman Users:
      - salesman@random.com (PW: 123test)
      - salesman2@random.com (PW: test123)
   - Dealership Users:
      - dealership@alwaysAvailable.com (PW: test123)

Please commit all necessary files (be sure to exclude dependencies like ``./node_modules``) and inform fabian.roth@caronsale.de that you finished the assignment.

If you have any questions, feel free to contact Fabian Roth via fabian.roth@caronsale.de
