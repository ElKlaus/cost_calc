/**
 * аппаратный
 * канальный
 * сетевой
 * транспортный
 * сессионный
 * представлений
 * приложений
 */

function slow(x) {
  alert (`Called with ${x}`);

  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    console.log(x);

    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func(x);

    cache.set(x, result);

    return result;
  }
}

slow = cachingDecorator(slow);


alert( slow(1) );
alert( `Again: ${slow(1)}` );

// alert( slow(2) );
// alert( `Again: ${slow(2)}` );