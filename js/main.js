// Элементы формы
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs      = document.querySelectorAll('input');

//Радиокнопки
const radioType    = document.querySelectorAll('input[name="type"]');
const radioBulding = document.querySelectorAll('input[name="building"]');
const radioRooms   = document.querySelectorAll('input[name="rooms"]');


//Чекбоксы
const ceiling = document.querySelector('input[name="ceiling"]');
const walls   = document.querySelector('input[name="walls"]');
const floor   = document.querySelector('input[name="floor"]');

const basePrice   = 6000;
const totalPriceElement = document.querySelector('#total-price');


//связка range c текстовым полем
//слушаем событие input
squareRange.addEventListener('input', ()=> {
  squareInput.value = squareRange.value;
});

//Связка текстового поля с range
squareInput.addEventListener('input', ()=> {
  squareRange.value = squareInput.value;
});

function calculate() {
  let totalPrice = basePrice * parseInt(squareInput.value);

  for (const radio of radioType) {
    if(radio.checked) {
      totalPrice *= parseFloat(radio.value);
    }
  }

  for (const radio of radioBulding) {
    if(radio.checked) {
      totalPrice *= parseFloat(radio.value);
    }
  }

  for (const radio of radioRooms) {
    if(radio.checked) {
      totalPrice *= parseFloat(radio.value);
    }
  }

  if (ceiling.checked) {
    totalPrice += parseFloat(ceiling.value) * parseInt(squareInput.value);
  }

  if (floor.checked) {
    totalPrice *= parseFloat(ceiling.value);
  }

  if (walls.checked) {
    totalPrice *= parseFloat(ceiling.value);
  }

  const formatter = new Intl.NumberFormat('ru');
  totalPriceElement.innerText = formatter.format(totalPrice);;
};

calculate();

for (const input of inputs) {
  input.addEventListener('input', () => {
    calculate();
  })
}