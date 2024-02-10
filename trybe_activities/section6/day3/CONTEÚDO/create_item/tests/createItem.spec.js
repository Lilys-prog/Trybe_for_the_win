const createItem = require('../src/createItem');

describe('Tests the function createItem', () => {
  it('verifies if createItem is defined', () => {
    expect(createItem).toBeDefined();
  });

  it('verifies if, when receiving the correct parameters, returns a valid item', () => {
    expect(createItem('Banana', 'kg', 1.99, 20)).toEqual({
      name: 'Banana',
      quantity: 20,
      unit: 'kg',
      price: 1.99,
    });
  });

  it('verifies if zero is the default quantity', () => {
    expect(createItem('Banana', 'kg', 1.99)).toEqual({
      name: 'Banana',
      quantity: 0,
      unit: 'kg',
      price: 1.99,
    });
  });

  it('throws an error when doesn`t receive parameters', () => {
    expect(() => createItem()).toThrow();
  });

  it('throws an error when receives a name that`s not a string', () => {
    expect(() => createItem(3, 'kg', 1.99, 20)).toThrow('O nome do item deve ser uma string');
  });

  it('throws an error if the parameter price is a negative number', () => {
    expect(() => (createItem('Banana', 'kg', -1.99, 20))).toThrow('O preço do item deve ser maior que zero');
  });

  it('throws an error if the parameter price is zero', () => {
    expect(() => (createItem('Banana', 'kg', 0, 20))).toThrow('O preço do item deve ser maior que zero');
  });
});
