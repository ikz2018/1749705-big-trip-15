const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

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

const generateOffer = () => {
  const offers = [
    {
      'title': 'Choose meal',
      'price': 180,
    }, {
      'title': 'Upgrade to comfort class',
      'price': 50,
    }, {
      'title': 'Choose seats',
      'price': 5,
    }, {
      'title': 'Train by train',
      'price': 30,
    }, {
      'title': 'Add luggage',
      'price': 40,
    },
  ];

  const randomIndex = getRandomInteger(0, offers.length - 1);

  return offers[randomIndex];
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
  return price;
};

const generateOfferPrice = () => {
  const price = getRandomInteger(20, 100);
  return price;
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

export const generatePoint = () => ({
  basePrice: generatePrice(),
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo: '2019-07-11T11:22:13.375Z',
  destination: DESTINATION,
  destinationName: DESTINATION.name,
  destinationDescription: DESTINATION.description,
  id: '0',
  isFavorite: Boolean(getRandomInteger(0, 1)),
  offers: generateOffer(),
  type: generateType(),
  offerTitle: generateTitle(),
  offerPrice: generateOfferPrice(),
});
