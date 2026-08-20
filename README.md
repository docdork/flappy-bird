# Flying QA

Flying QA is a Flappy Bird-style mobile game built with React Native and Expo. Guide the bird through the obstacles, score points by passing them, and try to beat your high score.

## Gameplay

- Tap the screen to make the bird fly upward.
- Avoid the top and bottom obstacles.
- Earn one point each time an obstacle pair is cleared.
- A collision ends the round. Press **Press to start** to begin a new game.

## Requirements

- Node.js with npm
- Expo CLI through the project dependency
- Expo Go, an Android emulator, an iOS simulator, or a development build
- An Expo/EAS account for cloud builds

The project uses Expo SDK 54, React Native 0.81, and Expo Router.

## Setup

Clone the repository, install dependencies, and start the development server:

```bash
npm install
npm start
```

When the server starts, use the interactive Expo terminal to open the app in Expo Go, an emulator, or a simulator.

You can also start a specific target directly:

```bash
npm run android
npm run ios
npm run web
```

## Quality Checks

Run the project linter before committing changes:

```bash
npm run lint
```

## Builds

Install and authenticate with EAS CLI before creating cloud builds:

```bash
npm install --global eas-cli

```

Available build profiles are defined in `eas.json`:

```bash
eas build --profile development
eas build --profile preview
eas build --profile production
```

The development profile creates a development client, preview creates an internal distribution build, and production creates a store-ready build with automatic version increments.

## Project Structure

```text
app/                 Expo Router screens and layout
components/          Bird, obstacle, and floor renderers
entities/            Matter.js game entities
utils/               Random obstacle generation
physics.js           Gravity, tap input, movement, scoring, and collisions
images/              Game artwork used by the main screen
assets/images/       Expo app icons and splash-screen assets
app.json             Expo app configuration and native identifiers
eas.json             EAS build and submission profiles
```

The main game screen is [app/index.tsx](app/index.tsx). Physics and collision behavior lives in [physics.js](physics.js).

## Changing the App Name

Update the `expo.name` field in [app.json](app.json). The `slug` identifies the Expo project and can remain unchanged unless the project identity also needs to change.

## Useful Documentation

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router documentation](https://docs.expo.dev/router/introduction/)
- [EAS Build documentation](https://docs.expo.dev/build/introduction/)
- [Matter.js documentation](https://brm.io/matter-js/docs/)
