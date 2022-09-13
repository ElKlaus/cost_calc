const binary_search = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = low + high;
    let guess = list[mid];

    if (guess == item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

console.log(binary_search(myList, 8))

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