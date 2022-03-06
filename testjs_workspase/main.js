const getValue = (defObj, data) => {
  let result;

  let current = defObj;

    // console.log(defObj);

  for (const item of data) {

    console.log(item);
    if((typeof current[item] === 'object' && Object.hasOwn(current, item)) ) {
      current = current[item];
    } else {
      result = current[item] ? current[item] : null;
    }
  }

  console.log(result);

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

getValue(someObj, ['three1', '2', 'bizz']);
