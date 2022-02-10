// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0)
// }



// const binarySearch = (list, item) => {
//   let low = 0;
//   let high = list.length - 1;

//   while (low <= high) {
//     let mid = (low + high);
//     let guess = list[mid];

//     if ( guess === item) {
//       return mid;
//     } else if (guess > item) {
//       high = mid - 1;
//     } else {
//       low = mid + 1
//     }

//     console.log(mid, 'adfa');
//   };

  
// };


// const someArr = [1, 3, 5, 7, 9];


// binarySearch(someArr, 9);

// const user = { name: 'Vasya', married: true, age: 25};
// const name = 'age';
// user[name] = 'Inna';


// let timeId = setTimeout(function tick() {
//   alert('tick');
//   timeId = setTimeout(tick, 2000)
// }, 2000);

// // setTimeout
// const test = () => clearTimeout(timeId);

// setTimeout(test, 10000);

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
