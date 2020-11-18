const inquirer = require("./node_modules/inquirer/lib/inquirer.js");
const Battle = require("./battle");
const { theOriginals, genTwo, tooOp } = require("./pokemon");
const Trainer = require("./trainer");

console.log("Welcome to the world of Pokemon!");

const questions = [
  {
    type: "input",
    name: "pressEnter",
    message: "PRESS ENTER TO START",
  },

  {
    type: "input",
    name: "name",
    message: "Hey trainer! What is your name?",
  },

  {
    type: "list",
    name: "team",
    message: "Pick your team",
    choices: ["the originals (Charmander, Squirtle, Bulbasaur)"],
  },

  {
    type: "list",
    name: "enemy",
    message: "Are you ready to battle?",
    choices: ["Brock"],
  },

  {
    type: "list",
    name: "actionToTake",
    message: "What will you do?",
    choices: ["Fight", "Run"],
  },
];

const turnQuestions = [
  {
    type: "list",
    name: "turn",
    message: "What will you do?",
    choices: ["Attack", "Run"],
  },
];

function takeTurn() {
  inquirer.prompt(turnQuestions).then((answers) => {
    if (answers.turn === "Attack") {
      newBattle.fight();
      newBattle.fight();
      if (newBattle.winner === false) {
        takeTurn();
      }
    } else if (answers.turn === "Run") {
      console.log("Why are you runinnn!");
    }
  });
}

inquirer.prompt(questions).then((answers) => {
  const player = new Trainer(answers.name);
  const enemy = new Trainer(answers.enemy);

  if (answers.team.includes("the originals")) {
    player.catch(theOriginals[0]);
    player.catch(theOriginals[1]);
    player.catch(theOriginals[2]);
  }

  if (enemy.name === "Brock") {
    enemy.catch(tooOp[0]);
    enemy.catch(tooOp[1]);
    enemy.catch(tooOp[2]);
  }

  newBattle = new Battle(
    player,
    enemy,
    player.storage[0],
    enemy.storage[0]
  );

  console.log(
    `New battle started between ${player.name} and ${enemy.name}!`
  );

  takeTurn();
});
