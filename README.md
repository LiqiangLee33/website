# Conestoga GDSC website

This is the repository for our club's website: https://gdsc-conestoga.web.app/

# Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app):
```
npx create-react-app website
```

## Requirements

- Node 14.0.0^
- npm 5.6^

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run emulate`

Starts the Firebase Emulators. Firebase emulators will mimic the job of a remote Firebase Project locally on your machine.

In order to run this command, you will need `firebase-tools` installed globaly: 
```
npm i -g firebase-tools
```

Firebase emulators UI can then be accessed on [http://localhost:4000](http://localhost:4000)

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Development workflow

In order to get the project going on your computer, you need to run `npm run emulate` and `npm start` inparallel.

# Contribution

1. Pick an issue you wont to work on either from the **Issues** or the **Projects** tab
2. Comment on the issue that you are taking on tackling it, so everybody knows if the issue is already taken.
3. Create a **Pull Request** against the `main` branch and reference the issue in question
4. Wait for approval and resolve any suggested changes

