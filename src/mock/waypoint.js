import {dayjs} from 'dayjs';
import {getRandomInteger} from '../utils';

const generateType = () => {
  const types = [
    'taxi',
    'bus',
    'train',
    'ship',
    'drive',
    'flight',
    'check-in',
    'sightseeing',
    'restaurant',
  ];

  const randomIndex = getRandomInteger(0, types.length - 1);

  return types[randomIndex];
};

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateTown = () => {
  const towns = [
    'Almaty',
    'Nur-Sultan',
    'Taraz',
    'Tokyo',
    'Tashkent',
  ];

  const randomIndex = getRandomInteger(0, towns.length - 1);

  return towns[randomIndex];
};

const generateTitle = () => {
  const titles = [
    'Choose meal',
    'Upgrade to comfort class',
    'Choose seats',
    'Train by train',
    'Add luggage',
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

const generatePrice = () => {
  const price = getRandomInteger(200, 1000);
  return Math.round(price / 10) * 10;
};

const generateOfferPrice = () => {
  const price = getRandomInteger(20, 100);
  return Math.round(price / 10) * 10;
};

const DESTINATION = {
  'description': generateDescription(),
  'name': generateTown(),
  'pictures': [
    {
      'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
      'description': `${generateTown() } is great city`,
    },
  ],
};

export const generatePoint = () => {
  const startDate = dayjs().add(getRandomInteger(-5, 10), 'day').add(getRandomInteger(0, 23), 'hour').add(getRandomInteger(0, 59), 'minute');
  const finishDate = startDate.add(getRandomInteger(0, 3), 'day').add(getRandomInteger(0, 23), 'hour').add(getRandomInteger(0, 59), 'minute');

  return {
    basePrice: generatePrice(),
    dateFrom: startDate,
    dateTo: finishDate,
    destination: DESTINATION,
    destinationName: DESTINATION.name,
    destinationDescription: DESTINATION.description,
    id: '0',
    isFavorite: Boolean(getRandomInteger(0, 1)),
    type: generateType(),
    offerTitle: generateTitle(),
    offerPrice: generateOfferPrice(),
  };
};
