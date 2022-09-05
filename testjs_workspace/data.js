const myList = [1, 3, 5, 7, 9, 56, 544, 8, 91, 77, 32, 24, 77, 55, 46, 63, 866, 17, 27];

const intNumbers = [-1, 2, -3, 4, -5, 6, -7, 0, -8];

const myList1 = [24, 77, 55, 46, 63, 866, 17, 27];

let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

const Dog1 = function (name = 'Sharik', bread = 'bread', weight = '10kg') {
  return {name, bread, weight};
};

const showDog = {
  name: 'Pirat',
  bread: 'new bread',
  weight: '20kg'
}

const numbersObj = {
  one: 1,
  two: 2,
  three: {
    1: 'one',
    2: {
      bizz: 'bazz'
    }
  },
  four: 4,
};

const carsObj = {
  model: 'Chevrolet',
  class: 'Pony car',
  layout: 'FR layout',
  platform: {
    f_body: {
      years: '1967-2002' 
    },
    zeta_platform: '2010-2015',
    alpha_platform: '2016-present',
  },
  model_years: {
    last: '1967-2002',
    present: '2010',
  },
  hasWings: false,
};

const keysForTest = ['platform', 'f_body', 'years'];