class Pokemon {
  constructor (id, name, height, weight, types) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.types = types;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getHeight() {
    return this.height;
  }

  getWeight() {
    return this.weight;
  }

  getTypes() {
    return this.types;
  }

  printAll() {
    console.log('ID: ' + this.id);
    console.log('Name: ' + this.name);
    console.log('Height: ' + this.height);
    console.log('Weight: ' + this.weight);
    console.log('Type: ' + this.types);
  }
}

module.exports = Pokemon;