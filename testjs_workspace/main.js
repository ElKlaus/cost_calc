class Rabbit extends Object {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Bunny");

alert(  rabbit.hasOwnProperty('name') );