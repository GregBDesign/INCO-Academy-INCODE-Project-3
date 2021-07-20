# INCO Academy - INCODE Project 3: Basic Web App

## Author: Greg Baugh

### About

This project is a web app using Express and Node. As per the project requirements it is split into three sections.

A new branch has been created for each section:
- Branch: Main - 3A
- Branch: 3b - 3b
- Branch: 3c - 3C

Technologies used:
- NodeJS
- Express
- Handlebars (https://handlebarsjs.com/)
- Postgres

### Installation instructions

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