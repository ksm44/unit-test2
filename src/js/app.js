import getHealthStatus, { healthSort } from './health';

console.log('worked');

console.log(getHealthStatus({ name: 'Маг', health: 90 }));

const chatactersList = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

console.log(healthSort(chatactersList));
