// const { property } = require("lodash");

const deepClone = (obj_one, obj_two) => {
  for (const item in obj_two) {
    if (typeof item === 'object') {
      return deepClone(obj_one, obj_two[item]);
    } else {
      obj_one[item] = obj_two[item];
    }
  }

  return obj_one;
};

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

const getValue = (data, ...property) => {
  let current = data; 
  let res;

  for (const item of property) {
    const hasProperty = current.hasOwnProperty(item);

    if(!hasProperty) return null;

    if (current[item] && typeof current[item] === 'object') {
      current = current[item];
    }

    res = current[item];
  }
  console.log(res);
  return res
};


// @ts-check

import chunk from 'lodash/chunk.js';

// BEGIN (write your solution here)
const ipToInt = (ipInt) => {
  // const strIpArr = strIp.split('.');
  // let res = '';
  return ipInt.split('.').reduce(function (ipInt, octet) { return (ipInt << 8) + parseInt(octet, 10) }, 0) >>> 0;
};

const intToIp = (intIP) => {
  // const strIpArr = intIp.padStart(10, '0');
  return (intIP >>> 24) + '.' + (intIP >> 16 & 255) + '.' + (intIP >> 8 & 255) + '.' + (intIP & 255);
}

export { ipToInt, intToIp };
// END