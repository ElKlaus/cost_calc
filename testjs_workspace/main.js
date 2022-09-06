// const { isEmpty } = require("lodash");

const { entries } = require("lodash");

// const { reduce } = require("lodash");

const cloneDeep = (data) => {
  const entries = Array.prototype.entries(data);
  const result = {};

  for (const [key, value] of entries) {
    result[key] = typeof value === "object" ? cloneDeep(value) : value;
  }

  return result;
};

const emptyTagsCount = (coll, tagName) => {
  const isTag = (tag) => getName(tag) === tagName && isEmpty(tag);
  const func = (element, acc) => (isTag(element) ? acc + 1: acc);

  return reduce(func, 0, coll);
}

let worker = {
  someMethod() {
    return 10;
  },

  slow(x) {
    alert("Called with " + x);

    return x * this.someMethod();
  }
};

function cachingDecorator(func) {
  let cashe = new Map;

  return function(x) {
    console.log(cashe);

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

// alert( worker.slow(2) );
// alert( worker.slow(2) );
// alert( worker.slow(12) );
// alert( worker.slow(12) );
// alert( worker.slow(22) );
// alert( worker.slow(22) );

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