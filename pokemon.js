class Pokemon {
    constructor(name, hp, attack, sound, move, type = 'normal') {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.sound = sound;
        this.move = move;
        this.type = type;
        this.weakness = [];
        this.strength = [];
    };
};

module.exports = { Pokemon }