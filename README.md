<p align="center">
  <img src="logo.png" alt="chess" width="200" />
</p>

# Be The Hero - Backend

## Overview

The main objective of this project is to provide a way to help Non-Governmental Organisation find "Heroes" to help in their causes. This can be done by providing a [web](https://github.com/igorsouza-dev/bethehero-frontend) interface for the NGO to insert their needs and then a "Hero" can find these needs using a [mobile app](https://github.com/igorsouza-dev/bethehero-mobile) and get in touch with the organization.

## Setting up

### Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Npm](https://www.npmjs.com/get-npm)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable) - This is optional but in this readme I'll be using it on some CLI commands, you can use npm if you want.

### Dependencies

These are some of the libraries that I used in this project

- [Knex](https://knexjs.org/) - A SQL Query Builder for Javascript
- [Express](https://expressjs.com/) - Node.js web application framework for API building
- [Sqlite3](https://github.com/mapbox/node-sqlite3) - Sqlite client for Node.js
- [Dotenv](https://github.com/motdotla/dotenv) - Loads environment variables from a .env file
- [Celebrate](https://www.npmjs.com/package/celebrate) - Express middleware function that wraps the [joi](https://github.com/hapijs/joi/tree/master) validation library

### Dev Dependencies

- [Sucrase](https://github.com/alangpierce/sucrase) - Babel alternative
- [Nodemon](https://nodemon.io/) - monitor for any changes in code and automatically restart server
- [Eslint](https://eslint.org) - Ecmascript linter
- [Prettier](https://prettier.io) - Code formatter
- [Jest](https://jestjs.io/) - Testing framework
- [Supertest](https://github.com/visionmedia/supertest) - Library for testing node.js HTTP servers

### Routes

| Routes         | Method           |
| -------------- | ---------------- |
| /sessions      | POST             |
| /ongs          | GET, POST        |
| /incidents     | GET, POST        |
| /incidents/:id | GET, PUT, DELETE |

You can import the Insomnia file located at the root of the project in your Insomnia client if you want to test the routes.

## Installing

All you need to do is run `yarn` at the root of the project in order to install the dependencies.

Copy the `.env.example` file and rename it to `.env`. Set the `NODE_ENV` variable inside it. This variable will be used by the Knex library to choose what database configuration will be used.

Then run the migrations in order to initialize the database

```sh
yarn knex migrate:latest
```

## Starting

Just run `yarn dev`

## License

This is a open-sourced software licensed under the [MIT license](LICENSE.md).
