// const { property } = require("lodash");
// const {
//   mkfile, mkdir, isDirectory, isFile, map,
// } = require('@hexlet/immutable-fs-trees');

const Dog = function (name = 'Sharik', bread = 'bread', weight = '10kg') {
  return {name, bread, weight};
};


const showDog = {
  name: 'Pirat',
  bread: 'new bread',
  weight: '20kg'
}

console.log(Dog.call(showDog, 'name'));

const deepClone = (obj_one, obj_two) => {
  for (const item in obj_two) {
    if (typeof item === 'object') {
      return deepClone(obj_one, obj_two[item]);
    } else {
      obj_one[item] = obj_two[item];
    }
  }

  return obj_one;
};

const numbersObj = {
  one: 1,
  two: 2,
  three: {
    1: 'one',
    2: {
      bizz: 'bazz'
    }
  },
  four: 4,
};

const carsObj = {
  model: 'Chevrolet',
  class: 'Pony car',
  layout: 'FR layout',
  platform: {
    f_body: {
      years: '1967-2002' 
    },
    zeta_platform: '2010-2015',
    alpha_platform: '2016-present',
  },
  model_years: {
    last: '1967-2002',
    present: '2010',
  },
  hasWings: false,
};

const getValue = (data, ...property) => {
  let current = data; 
  let res;

  for (const item of property) {
    const hasProperty = current.hasOwnProperty(item);

    if(!hasProperty) return null;

    if (current[item] && typeof current[item] === 'object') {
      current = current[item];
    }

    res = current[item];
  }
  console.log(res);
  return res
};

/* ============ */
let indexes = [];
const someArr = ['a', 'b', 'a', 'c', 'a', 'd'];
const someEl = 'a';
let idx = someArr.indexOf(someEl);

while (idx != -1) {
  indexes.push(idx);

  idx = someArr.indexOf(someEl, idx + 1);
}
/* ============ */


let a = 5;
let b = 10;

function fn(strings, ...values) {
  console.log(strings[0]); // 'sum: '
  console.log(strings[1]); // 'division: '
  console.log(values[0]);  // 15
  console.log(values[1]);  // 2
};

// fn`sum: ${ a + b }division: ${ b / a }`;


const reduce = (collection, func) => {
  let acc;

  const iter = (collection, acc) => {
    
  };
};

// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//       console.log(i);
//   }, 0);
// }

