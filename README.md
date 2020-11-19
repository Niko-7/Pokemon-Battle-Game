# Pokemon-Battle-Game

# About
A Pokemon battle game that you can play in your terminal! This game was built by using JavaScript. Using the Inquirer library, this game can be played using inputs and selections to play out a Pokemon battle between 2 trainers.

The game takes in to account Pokemon type advantages and therefore will implement attack modifiers. If the attacking pokemon is strong against the opponent, then the attack power will be increased multiplied by 1.25, whereas if the attacking pokemon is weak to the opponent, then the attack will be reduced by 0.75.

The player gets to choose their trainer name and a set of pokemons to begin with, then choose if they are ready to battle. On each turn of battle, there is a commentary of the fight, including what pokemon has used what move, and how much damage has been dealt. When one of the trainers has no Pokemon left, the winner will be announced.

# Instructions
To play the game Clone down the repo, then cd into the directoryand open the file with VS code,
Install Inquirer by typing "npm install inquirer" in the terminal and then
type "node game.js" to run the game

# Tools
The game was built by using JavaScript Object Oriented Programming and has been tested throughout using Jest
Inquirer was used to make the game playable using the command line
