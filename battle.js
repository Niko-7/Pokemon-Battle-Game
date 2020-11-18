class Battle {
  constructor(player, enemy, myPokemon, enemyPokemon) {
    this.player = player;
    this.enemy = enemy;
    this.myPokemon = myPokemon;
    this.enemyPokemon = enemyPokemon;
    this.turn = 1;
    this.winner = false;
  }

  fight() {
    if (
      this.enemy.storage.some((pokemon) => pokemon.hp > 0) &&
      this.player.storage.some((pokemon) => pokemon.hp > 0)
    ) {
      if (this.turn % 2 !== 0) {
        console.log(
          `It's ${this.player.name}'s turn! Go!! ${this.myPokemon.name}!`
        );
        console.log(this.myPokemon.talk());

        if (this.myPokemon.strength[0] === this.enemyPokemon.type) {
          this.enemyPokemon.hp -= this.myPokemon.attack * 1.25;

          console.log(
            `${this.myPokemon.name} used ${
              this.myPokemon.move
            }, it's super effective! ${this.myPokemon.name}'s attack did ${
              this.myPokemon.attack * 1.25
            } damage! ${this.enemyPokemon.name} has ${this.enemyPokemon.hp} hp left!\n`
          );

          
        } else if (this.myPokemon.weakness[0] === this.enemyPokemon.type) {
          this.enemyPokemon.hp -= this.myPokemon.attack * 0.75;
          console.log(
            `${this.myPokemon.name} used ${this.myPokemon.move}, it's not very effective. ${this.enemyPokemon.name} has ${this.enemyPokemon.hp} hp left!`
          );

        } else {
          this.enemyPokemon.hp -= this.myPokemon.attack;
          console.log(
            `${this.myPokemon.name} attacked with ${this.myPokemon.move}. ${this.enemyPokemon.name} has ${this.enemyPokemon.hp} hp left!`
          );
        }
      }

     
      if (this.turn % 2 === 0) {
        console.log(
          `It's ${this.enemy.name}'s turn! Go ${this.enemyPokemon.name}!`
        );
        console.log(this.enemyPokemon.talk());

        if (this.enemyPokemon.strength[0] === this.myPokemon.type) {
          this.myPokemon.hp -= this.enemyPokemon.attack * 1.25;
          console.log(
            `${this.enemyPokemon.name} used ${
              this.enemyPokemon.move
            }, it's super effective! ${this.enemyPokemon.name}'s attack did ${
              this.enemyPokemon.attack * 1.25
            } damage! ${this.myPokemon.name} has ${this.myPokemon.hp} hp left!`
          );

 
        } else if (this.enemyPokemon.weakness[0] === this.myPokemon.type) {
          this.myPokemon.hp -= this.enemyPokemon.attack * 0.75;
          console.log(
            `${this.enemyPokemon.name} used ${this.enemyPokemon.move}, it's not very effective. ${this.myPokemon.name} has ${this.myPokemon.hp} hp left!`
          );

        } else {
          this.myPokemon.hp -= this.enemyPokemon.attack;
          console.log(
            `${this.enemyPokemon.name} used ${this.enemyPokemon.move}. ${this.myPokemon.name} has ${this.myPokemon.hp} hp left`
          );
        }
      }

      this.turn++; 

      if (this.myPokemon.hp <= 0) {
        console.log(`${this.myPokemon.name} has fainted!`);

        
        if (this.player.storage.some((pokemon) => pokemon.hp > 0)) {
          console.log(`${this.player.name}, bring out your next pokemon!`);

          this.myPokemon = this.player.storage[
            this.player.storage.indexOf(this.myPokemon) + 1
          ];
          console.log(`${this.myPokemon.name}, I choose you!`);
        } else {
          console.log(`${this.enemy.name} is the winner!`);
          this.winner = true;
        }
      }

      if (this.enemyPokemon.hp <= 0) {
        console.log(`${this.enemyPokemon.name} has fainted!`);

        
        if (this.enemy.storage.some((pokemon) => pokemon.hp > 0)) {
          console.log(`${this.enemy.name}, bring out your next pokemon!`);

          this.enemyPokemon = this.enemy.storage[
            this.enemy.storage.indexOf(this.enemyPokemon) + 1
          ];
          console.log(`${this.enemyPokemon.name}, I choose you!`);
        } else {
          console.log(`\n${this.player.name} is the winner!`);
          this.winner = true;
        }
      }
    } else {
      console.log("The battle is over!");
    }
  }
}

module.exports = Battle;
