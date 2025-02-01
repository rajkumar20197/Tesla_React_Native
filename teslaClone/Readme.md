Tesla Clone - React Native

Overview

This is a React Native Tesla Clone application built using React Native and Expo. It replicates the Tesla website's car showcase with interactive buttons and a smooth UI.

Project Structure

The project is structured as follows:

Tesla_React_Native/
│── teslaClone/
│ ├── tesla/
│ ├── assets/
│ │ ├── images/
│ │ ├── ModelS.jpeg
│ │ ├── Model3.jpeg
│ │ ├── ModelX.jpeg
│ │ ├── ModelY.jpeg
│ │ ├── logo.png
│ │ ├── menu.png
│ ├── components/
│ │ ├── CarItem/
│ │ │ ├── index.js
│ │ │ ├── styles.js
│ │ │ ├── CarsList/
│ │ │ ├── cars.js
│ │ │ ├── index.js
│ │ │ ├── styles.js
│ │ ├── Header/
│ │ │ ├── index.js
│ │ │ ├── styles.js
│ │ ├── StyledButton/
│ │ ├── index.js
│ │ ├── styles.js
│ ├── App.js
│ ├── package.json

Components Breakdown

CarItem Component

File: components/CarItem/index.js

Displays individual car details with an image, title, and buttons.

Props include:

name: Car model name

tagline: Car tagline

taglineCTA: Call-to-action text

image: Background image

CarsList Component

File: components/CarItem/CarsList/index.js

Renders a FlatList of cars using CarItem component.

Uses cars.js to load car details.

Header Component

File: components/Header/index.js

Displays the Tesla logo and a menu icon at the top.

StyledButton Component

File: components/StyledButton/index.js

Renders two buttons: "Custom Order" and "Existing Inventory" with styling and press handlers.

Styling Files

Each component has its own styles.js file that defines styling using StyleSheet from React Native.

Dependencies

React Native

Expo

react-native StyleSheet

FlatList for listing car items

ImageBackground for car images

Running the Project

To run the project, follow these steps:

Install dependencies:

npm install

Start the development server:

expo start

Run on an emulator or real device using Expo Go.

Troubleshooting

Common Issues & Fixes

Component Import Errors:

Ensure file paths are correct.

Restart Metro bundler: npx react-native start --reset-cache

Image Not Loading:

Verify require() paths in cars.js.

Styles Not Applying:

Ensure styles.js is properly imported in components.

License

This project is for educational purposes only and is not affiliated with Tesla, Inc.
