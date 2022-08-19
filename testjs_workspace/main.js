const myList1 = [24, 77, 55, 46, 63, 866, 17, 27];

function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return -1;
  }
}

myList1.sort(compareNumbers);

alert(myList1);