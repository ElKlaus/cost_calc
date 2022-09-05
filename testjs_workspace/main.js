// конструктор
function Dog (name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

// созданный на основе конструктора объект.
const fido = new Dog("Fido", "Mixed", 38);

const func = function(arg = 333) {
  // const test = 'some text'
  console.log(arguments);
}

const wrapper = function() {
  return func(arguments);
}

const wrapper1 = function() {
  return func.apply(this, arguments);
}