# Apprentice Node Starter Kit

If you have not already, please install:

- [Yarn](https://yarnpkg.com/en/docs/install)
- [asdf](https://github.com/asdf-vm/asdf)

## Setting up a new project

```
$ git clone https://github.com/IntrepidPursuits/apprentice-node-starter-kit.git your-app-name
$ cd your-app-name
$ asdf install
$ yarn install
$ git remote remove origin
```

Then delete this section.

# Project Name

## Local Development Set Up

If you have not already, please install:

- [Yarn](https://yarnpkg.com/en/docs/install)
- [asdf](https://github.com/asdf-vm/asdf)

1.  Run the following commands

```
$ asdf install
$ yarn install
$ yarn db:create
$ yarn db:migrate
$ yarn start
```

The server should now be running on [locahost:3000](http://localhost:3000)

## About this starter kit

### NPM Package Managerment

This application uses [Yarn](https://yarnpkg.com/en/docs/install). **Do not
use `npm install` commands**. Instead use the equivalent [Yarn
commands](https://yarnpkg.com/en/docs/usage).

### Sequelize Integration

[Sequelize](http://docs.sequelizejs.com/) is the ORM used in this project. It leverages a [PostgreSQL](https://www.postgresql.org/) database. The following are some commands to get you started:

| Command                   | Explanation            |
| ------------------------- | ---------------------- |
| `yarn db:create`          | Create the database    |
| `yarn db:drop`            | Drop the database      |
| `yarn db:migrate`         | Run pending migrations |
| `yarn db:rollback`        | Revert a migration     |
| `yarn generate:migration` | Create a new migration |

For `yarn generate:migration`, you must pass a `name` flag for the name of the migration. For example:

```
yarn generate:migration --name create-users
```

### VSCode Debugging Integration

The project has been set up, so you can just add a breakpoint and launch the
nodemon debugger to start debugging the server.

### Testing

This applications uses [Jest](https://facebook.github.io/jest/) for testing. To run the test suite, simply run:

```
$ yarn test
```

### Linting and Code Formatting

- Shows linting errors via [ESLint](https://eslint.org/) using the [eslint-config-react-app](https://github.com/facebookincubator/create-react-app/tree/master/packages/eslint-config-react-app) configuration.
- Consistently formats code when it's commited using [Prettier](https://prettier.io/)
