/*
let a = 5;
let b = 10;

function fn(strings, ...values) {
  console.log(strings[0]);
  console.log(strings[1]);
  console.log(values[0]);
  console.log(values[1]);
}

fn`sum: ${a + b}division: ${ b / a}`;
*/
const city = "Самара";
document.write(city.charCodeAt(2));

const getValue = (defObj, data) => {
  let result;

  for (const item of data) {

    console.log(item);

    result = (typeof defObj[item] === 'object') ? getValue(defObj[item], data) : defObj[item];

    
  }

  return result;
}



const someObj = {
  one: 1,
  two: 2,
  three: {
    1: 'asdfdf',
    2: {
      bizz: 'bazz'
    }
  }
};

// console.log(getValue(someObj, ['three', '2', 'bizz']));
