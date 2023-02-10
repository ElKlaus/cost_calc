const square = require("./square");

describe('square', () => {
  let mockValue;

  beforeEach(() => {
    mockValue = Math.random();
  });

  beforeAll(()=> {

  });

  test('Корректное значение', () => {
    // expect(square(50)).toEqual(2500);
    // expect(square(50)).toBeLessThan(2550);
    // expect(square(50)).toBeGreaterThan(2450);
    // expect(square(50)).not.toBeUndefined;
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test('Корректное значение', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })
})