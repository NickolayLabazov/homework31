import hero from '../function';

test('Определение здоровья', () => {
  const input = {
    name: 'Маг',
    health: 10000,
  };
  const expected = 'healthy';
  const received = hero(input);
  expect(received).toBe(expected);
});

test('Определение здоровья', () => {
  const input = {
    name: 'Маг',
    health: 50,
  };
  const expected = 'wounded';
  const received = hero(input);
  expect(received).toBe(expected);
});

test('Определение здоровья', () => {
  const input = {
    name: 'Маг',
    health: 51,
  };
  const expected = 'healthy';
  const received = hero(input);
  expect(received).toBe(expected);
});

test('Определение здоровья', () => {
  const input = {
    name: 'Маг',
    health: 14,
  };
  const expected = 'critical';
  const received = hero(input);
  expect(received).toBe(expected);
});

test('Определение здоровья', () => {
  const input = {
    name: 'Маг',
    health: 15,
  };
  const expected = 'critical';
  const received = hero(input);
  expect(received).toBe(expected);
});

test('Определение здоровья', () => {
  const input = {
    name: 'Маг',
    health: 16,
  };
  const expected = 'wounded';
  const received = hero(input);
  expect(received).toBe(expected);
});

test('Определение здоровья', () => {
  const input = {
    name: 'Маг',
    health: 0,
  };
  const expected = 'critical';
  const received = hero(input);
  expect(received).toBe(expected);
});
