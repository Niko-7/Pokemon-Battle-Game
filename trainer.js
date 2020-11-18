class Trainer {
  constructor(name) {
    this.name = name;
    this.maxSize = 6;
    this.storage = [];
  }

  catch(pokemon) {
    if (this.storage.length < this.maxSize) {
      this.storage.push(pokemon);
    }
  }
}



module.exports = Trainer;
