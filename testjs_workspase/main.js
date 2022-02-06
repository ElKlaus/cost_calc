


let timeId = setTimeout(function tick() {
  alert('tick');
  timeId = setTimeout(tick, 2000)
}, 2000);

// setTimeout
const test = () => clearTimeout(timeId);

setTimeout(test, 10000);

// (clearTimeout(timeId), 10000);

// setTimeout(function timeout() {
//   console.log('Таймаут');
// }, 0);

// let p = new Promise(function(resolve, reject) {
//   console.log('Создание промиса');
//   resolve();
// });

// p.then(function() {
//   console.log('Обработка промиса');
// });

// console.log('конец скрипта');
