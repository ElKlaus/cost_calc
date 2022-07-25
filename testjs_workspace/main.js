/**
 * физический
 * канальный
 * сетевой
 * транспортный
 * сессионный
 * преставлений
 * приложений
 * 
 */
let worker = {
  slow(min, max) {
    alert(`Called with ${min}, ${max}`);

    return min + max;
  }
};

function cashingDecorator(func, hash) {
  let cashe = new Map();

  return function() {
    let key = hash(arguments);

    if (cashe.has(key)) {
      return cashe.get(key);
    }

    let result = func.call(this, ...arguments);

    cashe.set(key, result);

    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cashingDecorator(worker.slow, hash);

alert( worker.slow(3, 5));


const objectCreate = (arg) => {
  if (!arg) {
    return {}
  }

  const func = function() {};

  func.prototype = arg;

  return new func;
};

const changeOwner1 = (tree, owner) =>{
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));

  newMeta.owner = owner;

  if(isFile(tree)) {
    return mkFile(name, newMeta);
  }

  const children = getChildren(tree);
  const newChildren = children.map((child) => changeOwner(child, owner));

  return mkdir(name, newMeta, newChildren);
};


const debounce = (func, ms) => {
  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.aplly(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };
}

 const signCount = function(array) {
  let result = 0;
  for (let index = 0; index < array.length; ++index) {
    if (Math.sign(array[index]) !==1 && array[index] !== 0) {
      ++result;
    }
  }

  return result;
};

let step = (x) => Math.pow(2, x);

const decorator = (func) => {
  let cashe = new Map;

  return function(x) {
    if (cashe.has(x)) {
      return cashe.get(x);
    }

    let result = func(x);

    cashe.set(x, result);
    return result;
  }
}

step = decorator(step);

console.log(step(3));

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
}

const cloneDeep = (data) => {
  const entries = Object.entries(data);
  const resData = {};

  for (const [key, value] of entries) {
    resData[key] = typeof value === 'object' ? cloneDeep(value) : value;
  }

  console.log(resData);

  return resData;
};
