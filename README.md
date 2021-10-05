# User Schedule Web Application - INCO Academy Full Stack Web Development Bootcamp Assignment

## About

This project is a web application I built as part of my full stack web development bootcamp. The application allows staff at a fictional business to view their work schedules. Users can input new schedules and create new user records.  

As per the project requirements, the application is built using NodeJS and Express on the backend and HTML and CSS on the front end. The project suggested to use EJS for the templating engine but as I already had experience using this I used the Handlebars templating engine. We were also required to use Postgres as the database for this project. I had used NoSQL databases before with Express so this project was a good opportunity to use SQL in an Express application. As I am familiar with connecting to a SQL database in PHP, this wasn't too difficult to do in Express/NodeJS.

The 'Mr. Coffee' was provided to us as part of the project assets. All other UI elements, including font selection and colour choices, were designed and conceptualised by myself during the design process. 

The live project can be viewed [here](https://mr-coffee-scheduling.herokuapp.com/)

### Technologies used:
NodeJS, Express, Handlebars, CSS, PostgreSQL

#### Images:
![](https://res.cloudinary.com/dbdcclhzw/image/upload/v1633071002/Projects/Coffee/coffee1_nxez1w.png)
![](https://res.cloudinary.com/dbdcclhzw/image/upload/v1633070999/Projects/Coffee/coffee3_g1pf78.png)
![](https://res.cloudinary.com/dbdcclhzw/image/upload/v1633070999/Projects/Coffee/coffee2_frbbba.png)

#### Local Installation instructions

The following packages are required for this project and can be downloaded from NPM:
- Express
- express-handlebars
- dotenv
- bcrypt
- pg-promise

When setting up the project on your local system you will need to add a `.env` file to the root folder. This should contain your postgres connection information in the following format:
- `DB_USER = [USERNAME]`
- `DB_HOST = [DATABASE HOST]` 
- `DB_PASS = [PASSWORD]` 
- `DB_NAME = [DATABASE NAME]`

Please run (`npm run`) the following scripts in order to set up the database, tables and initial seed data:
- `create-database`
- `create-users`
- `create-schedules`
- `seed-users`
- `seed-schedules`
