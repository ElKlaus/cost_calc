const reverse = (str) => {
  let count = str.length - 1;
  let result = '';

  while(count >= 0) {
    result += str[count];

    count -= 1;
  }

  return result;
};

export default reverse;