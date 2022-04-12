# Pokémon TCG

A app for visualizing Pokémon cards.

## Installation

1. You need to have node installed in order to run this app.

- [Node.js](https://nodejs.org/en/download/)

2. Then run the following command to install every dependency:
   `npm install` or `yarn install`

3. Finally you can start the app in the development mode by using the code: `npm start`

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

## Features

- Paginated Pokémon card list
- Recently viewed cards (sorted by most recent, max: 8)
- Search cards by name
- View card details
   - Rules
   - Abilities
   - Attacks details by clicking on an attack

## Testing

### E2E tests

To run E2E tests use the following command: 

- cmd: `npmx cypress run`
- interface: `npmx cypress open`

### Client tests

To run tests use the following command: 

- tests: `npm test -- a`

- coverage: `npm test -- --coverage`
