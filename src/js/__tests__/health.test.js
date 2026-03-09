import getHealthStatus, { healthSort } from '../health';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Путник', health: 89 }, 'healthy'],
  [{ name: 'Путник', health: 50 }, 'wounded'],
  [{ name: 'Путник', health: 16 }, 'wounded'],
  [{ name: 'Страж', health: 15 }, 'critical'],
  [{ name: 'Страж', health: 9 }, 'critical'],
  [{ name: 'Мертвец', health: 0 }, 'critical'],
])('для health %p должен вернуть %s', (character, expected) => {
  expect(getHealthStatus(character)).toBe(expected);
});

const correctResult = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

describe('check sort characters by health', () => {
  const unsortList = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const result = healthSort(unsortList);

  test('characters sortered', () => {
    expect(result).toEqual(correctResult);
  });
  test('characters are not sortered', () => {
    expect(result).not.toBe(correctResult);
  });
});
