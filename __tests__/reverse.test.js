// import pkg from "@jest/globals";
import reverse from "../learn_tdd/src/reverse.js";

// const { expect } = pkg;

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('').toEqual(''));
});