
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    alert("Called with " + x);

    return x * this.someMethod();
  }
};

function cachingDecorator(func) {
  let cashe = new Map;

  return function(x) {
    alert(cashe);

    if (cashe.has(x)) {
      return cashe.get(x);
    }

    let result = func.call(this, x);
    // let result = func(x);

    cashe.set(x, result);

    return result;
  }
}

worker.slow = cachingDecorator(worker.slow);

// console.log(worker.slow);

alert( worker.slow(2) );
alert( worker.slow(2) );

// console.log(worker.slow);


// вызов из объекта
// вызов через подмененный контекст(bind, call, apply)
// вызов в качестве конструктора

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