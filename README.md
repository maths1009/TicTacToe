# Tic Tac Toe

An Electron application with React and TypeScript
This project is a Tic Tac Toe game developed using SCSS modules, absolute imports, and clsx for combining multiple CSS classes.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Start

```bash
$ npm start
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

## Current Features

- The game currently supports turn-based gameplay.
- The game also supports a custom grid with a minimum size of 3x3 and a customizable number of consecutive elements needed to win. These functionalities can be edited in the code, specifically in the constants file.

## Planned Enhancements

- Addition of the ability to play against a bot or in 1v1 mode.
- Addition of an easter egg.
- Restructuring of the code for better maintainability.
- Addition of parameters to customize the game, such as the number of rows and columns, or the number of successive symbols needed to win for more fun.

## How to Play

To play the game, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Run the command `npm start` to start the app.

## Versions Used

- Node: [20.9.0]
- electron-vite: [2.0.0]
- Electron [28.2.0]
- Vite [5.0.12]
- React: [18.2.0]
- TypeScript: [18.2.66]
