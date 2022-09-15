// queueMicrotask
// setInterval, setTimeout
// вызывается из объекта

// const { isEmpty } = require("lodash");

// 
const filter = (coll, func) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc.reverse();
    }

    const head = head(items);
    const newAcc = func(head) ? cons(head, acc) : acc;

    return iter(tail(items), newAcc);
  }

  return iter(coll, l());
}


const quotes = (coll) => {
  const filtered = filter(element => isFinite('blockquote', element), elements);
  const result = map(value, filtered);

  return result;
}

const binary_search = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = low + high;
    let guess = list[mid];

    console.log('low: ' + low, 'high: ' + high, 'mid: ' + mid, 'item: ' + guess, 'item: ' + item);

    if (guess === item) {
      return mid;
    }
    
    if (guess > item) {
      high = mid - 1;
    } else if (guess < item) {
      low = mid + 1;
    }
  }

  return null;
}

const searched = binary_search(myList, 866);

console.log(searched);

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log("Called with " + x);

    return x * this.someMethod();
  }
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      console.log("Hello from cache " + x);

      return cache.get(x);
    }

    let result = func.call(this, x);

    cache.set(x, result);

    return result;
  }
}

worker.slow = cachingDecorator(worker.slow);

// console.log(worker.slow(2));
// console.log(worker.slow(2));