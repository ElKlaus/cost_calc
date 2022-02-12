const getVal = (objArg, properties) => {
  // console.log('Функция запустилась ', objArg, properties);
  const propLength = properties.length;

  for (let i = 0; i < propLength; i++) {
    const itemProp = properties[i];
    const checkExist = Object.prototype.hasOwnProperty.call(objArg, itemProp);
  
    console.log(checkExist, itemProp);

    if (checkExist && i === (propLength - 1)) {
      console.log('Hello from first if', objArg[itemProp]);
      return objArg[itemProp];
    } else if (typeof objArg[itemProp] === 'object') {
      console.log('Recursia!!!!!', objArg[itemProp]);

      properties.shift();
      getVal(objArg[itemProp], properties);
    } else return null;

    
  }

};

export default getVal;

// const course = {
//   name: 'JS: React',
//   slug: 'js-react',
// };

// const entiries = Object.entries(course);




// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
// const getVal = (objArg, properties) => {
//   console.log('Функция запустилась ', objArg, properties);
//   let resVal;

//   for (const item of properties) {
//     const checkItem = Object.prototype.hasOwnProperty.call(objArg, item);

//     console.log('Результат проверки на наличие: ' + checkItem);

//     if (checkItem && typeof objArg[item] === 'object') {
//       console.log('RecursiAAAAA', objArg, properties, ' Свойство: ' + item + ' Значение: ' + objArg[item]/**/);
//       properties.shift();
//       getVal(objArg[item], properties);
//     } else if (checkItem && typeof item !== 'object') {
//       // console.log(item, objArg[item]);
//       resVal = objArg[item];
//       console.log('Вернулось значение свойства: ' + objArg[item]);
//     } else {
//       resVal = null;
//     }

//     console.log(resVal);


//   }

//     return resVal;
// };

// export default getVal;
// END

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