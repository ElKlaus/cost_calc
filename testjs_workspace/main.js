// const { property } = require("lodash");
// const {
//   mkfile, mkdir, isDirectory, isFile, map,
// } = require('@hexlet/immutable-fs-trees');

class Foo {
  constructor(name) {
    this.name = name;
  };

  showName() {
    console.log(this.name);
  };
};

class Bar extends Foo {
  showName() {
    console.log('I\'m');
    super.showName();
  };
};

let bar = new Bar('bar');

bar.showName();





let arrForSearch = [];

for (let i = 1; i != 100; i++) {
  arrForSearch.push(i);
}


const binarySearch = (arr, i) => {
  var mid = Math.floor(arr.length / 2);
  console.log(arr[mid], i);

  if (arr[mid] === i) {
      console.log('match', arr[mid], i);
      return 'arr[mid]';
  } else if (arr[mid] < i && arr.length > 1) {
      console.log('mid lower', arr[mid], i);
      binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
  } else if (arr[mid] > i && arr.length > 1) {
      console.log('mid higher', arr[mid], i);
      binarySearch(arr.splice(0, mid), i);
  } else {
      console.log('not here', i);
      return -1;
  }
}

const result = binarySearch(arrForSearch, 79);
console.log(result);



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

