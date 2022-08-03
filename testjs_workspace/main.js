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

function work(a, b) {
  alert(a + b);
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);

    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 15);

for (let args of work.calls) {
  console.log(args.join());

}


class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательное количество воды");

    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
}

let coffeeMachine = new CoffeeMachine(100);

// coffeeMachine.waterAmount() = -200;

function testConst() {};

// console.log(new testConst);

function slow(x) {
  alert(`Called with ${x}`);

  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func(x);

    cache.set(x, result);

    return result;
  }
}

slow = cachingDecorator(slow);

// slow(1);