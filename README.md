# Example App with Express JS

Example project use Express js (ES6)

## Dependencies Usage

1. axios: Hit External API
2. body-parser: Middleware parsing dari data yang dikirim dalam body request
3. cors: Middleware Cross-Origin Resource Sharing (CORS)
4. dotenv: Library konfigurasi
5. express: Framework
6. helmet: Middleware Security
7. morgan: Middleware logging aktivitas server.
8. pg & pg-hstore: Database PostgreSQL
9. sequelize: ORM database
10. cookie-parser: Cookie Parser
11. bcrypt: Hashing password
12. jsonwebtoken: Create JWT Token
13. Babel: Runtime Javascript
14. Express Validator: Validasi body param etc.

## Dependencies Development Usage

1. Prettier
2. Nodemon

### Sequelize CLI

1. Documentation `https://sequelize.org/docs/v6/core-concepts/model-querying-basics/`
2. Install Sequelize global
   `npm install -g sequelize-cli`
3. Sample generate model & migration
   `sequelize model:generate --name User --attributes nama_awal:string`
4. Refactor your migration, See existing migration files
5. Refactor your model See existing migration files
6. Migrate table
   `sequelize db:migrate`

## Installation

1. Clone the repository: `git clone https://github.com/your-username/express-project.git`
2. Navigate to the project directory: `cd express-sample`
3. Install the dependencies: `npm install`

## Usage

1. Configure
    - Copy .env.sample into .env
    - Create postgres database and configure database in src/config/config.json
    - run migration `sequelize db:migrate`
2. Start the development server: `npm run dev`
3. Open Client Api App like postman and hit `http://localhost:5005`

## Project Structure

-src

-   config
    -   configDatabase.js
-   controllers
    -   category
        -   index.js
-   database
    -   migrations
        -   file migration sequelize
    -   seeders
        -   file seeder sequelize
-   middlewares (validation etc)
    -   validation.middleware.js
-   models
    -   index.js
    -   user.js
    -   category.js
-   routes
    -   categoryRoutes.js
    -   index.js (mapping point tiap module)
-   utils
-   .env
-   app.js
-   .sequelizerc

## Available Routes

-   `GET /category` : Fetch all data
-   `GET /category/:id` : Fetch data by id
-   `POST /category` : Create data
-   `PATCH /category/:id` : update data
-   `DELETE /category/:id` : delete data
