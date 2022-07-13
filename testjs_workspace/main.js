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
