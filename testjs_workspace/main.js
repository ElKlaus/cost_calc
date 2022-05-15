



const cloneDeep = (data) => {
  const res = {};
  const entries = Object.entries(data);

  for (const [key, value] of entries) {
    res[key] = isObject(value) ? cloneDeep(value) : value;
  }

  return res;
}

const greeting = (name = 'Mike') => {
  alert(`Hi, ${name}!`);
};

function func1() {
  let funcExample = function () {
    return 'one';
  };

  return funcExample();

  funcExample = function() {
    return 'two';
  };
};

const getValue1 = (data, keys) => {
  let current = data;
  // const entries = Array.entries(data);

  for (const key of keys) {
    // const hasOwnProperty = ;

    if(!Object.hasOwn(current, key)) {
      return null;
    }

    current = current[key];
  }

  return current;
};



const fn = (strings, ...values) => {
  let str = '';

  for (let i = 0; i < values.length; i ++) {
    str += strings[i];
    
    str += values[i];
  }

  str += strings[strings.length - 1];

  return str;
};

let firstArg = 5;
let secondArg = 10;

let result = fn`sum: ${firstArg + secondArg} division: ${secondArg / firstArg}`;



const Dog = function (name = 'Sharik', bread = 'bread', weight = '10kg') {
  return {name, bread, weight};
};


const showDog = {
  name: 'Pirat',
  bread: 'new bread',
  weight: '20kg'
}



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

const keysForTest = ['platform', 'f_body', 'years'];

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

// function fn(strings, ...values) {
//   console.log(strings[0]); // 'sum: '
//   console.log(strings[1]); // 'division: '
//   console.log(values[0]);  // 15
//   console.log(values[1]);  // 2
// };

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

