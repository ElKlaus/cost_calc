const changeOwner7 = (tree, owner) => {
  const name = getName(tree);
  const newMeta = getMeta(tree);

  newMeta.owner = owner;

  if (isFile(tree)) {
    return mkFile(name, newMeta);
  }

  const children = getChildren(tree);

  const newChildren = children.map((child) => changeOwner7(child, owner));

  return mkDir(name, newChildren, newMeta);
}

const objectCreate1 = (arg) => {
  if (!arg) {
    return {};
  }

  const func = function() {};

  func.prototype = arg;

  return new func();
}

const customCunst1 = (name, breed, weight) => {
  this.name = name;
  this.bread = bread;
  this.weight = weight;
};

const newDog = new customCunst1('Sharick', 'Mixed', 123);

const objecCreate3 = (arg) => {
  if (!arg) {
    return {};
  }

  const func = function() {};

  func.prototype = arg;

  return new func;
}

const binarySearch3 = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low < high) {
    let mid = low + high;
    let guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const changeOwner5 = (tree, owner) => {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));

  newMeta.owner = owner;

  if (isFile(tree)) {
    return mkfile(name, newMeta);
  }

  children = getChildren(tree);

  newChildren = children.map((child) => changeOwner5(child, owner));

  return mkdir(name, newChildren, newMeta);
};

const customCunst = function(name, breed, height) {
  this.name = name;
  this.breed = breed;
  this.height = height;
};

const objecCreate2 = (arg) => {
  if(!arg) {
    return {};
  }

  const func = function() {
    return {};
  }

  func.prototype = arg;

  return new func;
}

const bestDog = new customCunst('Taison', 'terier', 55);

const changeOwner4 = (tree, owner) => {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));
  newMeta.owner = owner;

  if(isFile(tree)) {
    return makeFile(name, newMeta);
  }

  const children = getChildren(tree);
  const newChildren = children.map((el) => changeOwner4(el, owner));
  const newTree = makeDir(name, newChildren, newMeta);

  return newTree;
}

const objecCreate1 = (arg) => {
  if(!arg) {
    return {};
  }

  const func = () => {};

  func.prototype = arg;

  return new func;
}

const getValue4 = (data, keys) => {
  let current = data;

  for (const key of keys) {
    const checkExistProp = Object.prototype.hasOwnProperty.call(current, key);

    if(!checkExistProp) {
      return null;
    } else {
      current = current[key];
    }
  }

  return current;
}

const reduceTags2 = (tree, func, acc) => {
  if(isEmpty(tree)) {
    return acc;
  }

  return reduceTags2(tail(tree), func, func(head(tree), acc));
}

const emptyTagsCount = (tag, tree) => {
  const result = tree
    .filter((el) => getTagName(el) === tag ? true : false)
    .reduce((acc, el) => {
      const newAcc = acc;

      if(isEmpty(el)) {
        newAcc += 1;
        return newAcc;
      } else {
        return newAcc;
      }
    }, 0)

    return result;
}

const binarySearch2 = (data, item) => {
  let low = 0;
  let high = data.length - 1;

  while(low <= high) {
    let mid = low + high;
    let guess = data[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const myList = [1, 3, 5, 7, 9, 56, 544, 8, 91, 77, 32, 24, 77, 55, 46, 63, 866, 17, 27];

const testBin = binarySearch2(myList.sort(), 5);

console.log(myList.sort(), '\n', testBin);

const changeOwner3 = (tree, owner) => {
  const name = getName(tree);
  const newMeta = getMeta(tree);
  newMeta.owner = owner;

  if(isFile(tree)) {
    return makeFile(name, newMeta);
  }

  const children = getChildren(tree);

  const newChildren = children.map((child) => changeOwner3(child, owner));

  return makeDir(name, newChildren, newMeta);
}

const factorial = (n) => {
  const iter = (current, acc) => {
    if(current === 0) {
      return acc;
    }
    return iter(current - 1, acc * current)
  }

  return iter(n, 1);
};

const objecCreate = (arg) => {
  if (!arg) {
    return {};
  }

  const res = {}

}

const objToArr = (data) => {
  const entries = Object.entries(data);
  const result = [];

  for (const [key, value] of entries) {
    if(typeof value === 'object') {
      result.push([key + '+++++', objToArr(value)]);
    } else {
      result.push([key + '!!!!', value]);
    }    
  }

  return result;
};

const changeOwner2 = (tree, owner) => {
  const name = getName(tree)
  const newMeta = _.cloneDeep(getMeta(tree));
  newMeta.owner = owner;

  if(isFile(tree)) {
    return newFile(name, newMeta);
  }

  const children = getChildren(tree);

  const newChildren = children.map((el) => changeOwner(el, owner));
  const newTree = mkdir(name, newChildren, newMeta);

  return newTree;
}

const getValue3 = (data, keys) => {
  let current = data;

  for (const key of keys) {
    const checkOwn = Object.prototype.hasOwn(current, key);

    if(!checkOwn) {
      return null;
    }

    current = data[key];
  }

  return current;
}

const cloneDeep1 = (data) => {
  const res = {};
  const entries = Object.entries(data);

  for (const [key, value] of entries) {
    if (typeof value === 'object') {
      res[key] = cloneDeep1(value);
    }

    res[key] = value;
  }

  return res;
};

const binarySearch1 = (coll, item) => {
  let low = 0;
  let high = coll.length - 1;

  while (low <= high) {
    let mid = low + high;
    let guess = coll[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const changeOwner1 = (coll, owner) => {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(treee));
  newMeta.owner = owner;

  if (isFile(tree)) {
    return mkfile(name, newMeta);
  }

  const children = getChildren(coll);

  const newChildren = children.map((child) => changeOwner(child, owner));
  const newTree = mkdir(name, newChildren, newMeta);

  return newTree;
}

const getValue2 = (data, keys) => {
  let current = data;

  for (const key of keys) {
    current = current.hasOwnProperty(key) ? current[key] : null;
  }

  return current;
};

const filter = (coll, func) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }

    const currentItem = head(items);
    const newAcc = func(currentItem) ? acc.push(currentItem) : acc;

    return iter(tail(items), newAcc);
  }

  return iter(coll, []);
}


const quotes = (coll) => {
  const checkItem = (item) => isQuote(item);

  return coll.filter(checkItem(el)).map(getQuote(el));
};

// try {
//   setTimeout(function() {
//     noSuchVariable;
//   }, 1000);
// } catch (e) {
//   alert("Ahtung!!");
// }

const makeTimer = (doneMessage, n) => {
  setTimeout(function() {
    alert(doneMessage);
  }, n);
}

const changeOwner = (tree, owner) => {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));
  newMeta.owner = owner;

  if (isFile(tree)) {
    return mkfile(name, newMeta);
  }

  const children = getChildren(tree);

  const newChildren = children.map((child) => changeOwner(child, owner));
  const newTree = mkdir(name, newChildren, newMeta);

  return newTree;
};


const reduceTags = (coll, func, acc) => {
  if(isEmpty(coll)) {
    return acc;
  }

  return reduceTags(tail(coll), func, func(head(coll), acc));
};

const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = low + high;
    let guess = list[mid];
    
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};


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

// function func1() {
//   let funcExample = function () {
//     return 'one';
//   };

//   return funcExample();

//   function() {
//     return 'two';
//   };
// };

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



console.log(objecCreate2(showDog));

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