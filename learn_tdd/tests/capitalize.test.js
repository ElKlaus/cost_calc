import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работат неверно!');
}

assert(capitalize('') === '', 'Функция работат неверно!');
assert(capitalize('hello') === 'Hello');

assert.equal(capitalize(''), '');


console.log('Все тесты пройдены!');