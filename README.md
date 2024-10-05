# Stormotion-project

# Local development
```bash
npm install
npm run dev
```

# Functionalities
## Main Page
Contains a welcome block, a block with the game rules that are displayed on the screen when the corresponding button is pressed, and are closed by clicking the cross in the corner of the modal window. It also includes a block for selecting game modes: Go First, Go Second, and Sandbox mode.

## Game Page
Contains a widget displaying the number of matchsticks for the opponent and the total number of matchsticks in the pile. The opponent takes turns based on a predetermined algorithm. If there are 1 or 2 matchsticks left in the pile and you can take up to 3, the corresponding button disappears from view. After winning or losing, a modal window appears on the screen with a message and two buttons: one to exit to the main menu and another to restart the game.

## Sandbox Page
The form changes the game parameters and has simple validation where m !== 2n + 1. When selecting parameters, it transitions to the game page.