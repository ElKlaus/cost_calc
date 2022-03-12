// import pkg from "@jest/globals";
import reverse from "../learn_tdd/src/reverse.js";
import { test } from '@jest/globals';

// const { expect } = pkg;

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});