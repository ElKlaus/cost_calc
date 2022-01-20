// Элементы формы
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs      = document.querySelectorAll('input');
const basePrice   = 6000;
const totalPriceElement = document.querySelector('#total-price');


//связка range c текстовым полем
//слушаем событие input
squareRange.addEventListener('input', ()=>{
  squareInput.value = squareRange.value;
});

//Связка текстового поля с range
squareInput.addEventListener('input', ()=>{
  squareRange.value = squareInput.value;
});

function calculate() {
  let totalPrice = basePrice * parseInt(squareInput.value);

  const formatter = new Intl.NumberFormat('ru');

  totalPriceElement.innerText = formatter.format(totalPrice);;
};

calculate();

for (const input of inputs) {
  input.addEventListener('input', () => {
    calculate();
  })
}