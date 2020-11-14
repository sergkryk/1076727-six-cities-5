// const imageUrl = `https://source.unsplash.com/collection/1163637/260x200?sig=`;
const avatarUrl = `https://api.adorable.io/avatars/`;
// const MAX_PRICE = 1000;
// const MAX__BEDROOMS = 10;
// const MAX_GUESTS = 30;
// const MAX_DESCRIPTIONS = 2;
// const MAX_IMAGES = 6;

const offersCount = 30;

const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

// const titles = [
//   `Park Inn by Radisson Nevsky`,
//   `Original Sokos Hotel Olympia Garden`,
//   `Radisson Sonya Hotel`,
//   `Majestic Boutique Hotel Deluxe`,
//   `Belmond Grand Hotel Europe`,
//   `Rocco Forte Astoria Hotel`,
//   `Angleterre Hotel`,
//   `Four Seasons Hotel Lion Palace`,
//   `Agent Flat Apartment`,
//   `Grani Aparthotel`,
//   `Apart-Hotel Victoria Bolshaya Morskaya 3-5`,
//   `Beautiful & luxurious studio at great location`,
//   `Bed&Bath Luxury Apartments`,
//   `Akyan St.Petersburg`
// ];

// const descriptions = [
//   `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//   `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
//   `Professional and friendly staff will do everything to make clients feel like at home. It’s important for us to leave you only positive emotions and an excellent mood.`,
//   `The history of surroundings is truly rich and attractive from a cultural point of view. In this area reigns the atmosphere of Pushkin, bohemian and aristocratic Petersburg.`,
//   `The hotel is situated in a quiet courtyard. This, together with comfortable beds, provides for a good night’s rest. Among other advantages - free WiFi, continental breakfast and complimentary cold & hot drinking water.`,
//   `Our warm and friendly team is always there to help you with whatever questions you may have. Having a vast knowledge of the local area we’ll gladly offer you valuable advice on how to plan your day, arrange guided tours in the city & the suburbs.`,
//   `Location of our hotel is just amazing: a minute’s walk from Nevsky Prospect and within minutes of Palace Square & the Hermitage. Art galleries, cafés, restaurants of every kind are all around it. The location is truly unbeatable.`,
//   `We offer diverse accommodations: comfortable standard and superior rooms, suites equipped with Jacuzzi and sauna. WiFi internet is complimentary.`,
//   `Our warm and friendly team is always there to help you with whatever questions you may think of. Having a vast knowledge of the local area we'll gladly offer you valuable advice on how to plan your day, arrange guided tours in the city & the suburbs.`,
//   `Our hotel is superbly located: just a minute’s walk from Nevsky Prospect and within minutes of Palace Square, the Hermitage, the Field of Mars and the Church of Our Savior on Blood. There’s no better location anywhere in the city.`,
// ];

const hostNames = [
  `Peter`,
  `Amelia`,
  `Sofia`,
  `Victoria`,
  `Stefan`,
  `Scarlett`,
  `Cameron`,
  `Olivia`,
  `Ann`,
  `Jennifer`,
  `Geralt`,
  `Triss`,
  `Clinton`,
  `Bec`,
  `Zhanar`,
  `Mustapha`,
  `Margaret`,
  `Louise`,
  `Sarah`,
];

// const types = [
//   `Hotel`,
//   `Apartment`,
//   `Guest house`,
//   `Villa`,
//   `Campsite`,
//   `Hostel`
// ];

// const features = [
//   `Wi-Fi`,
//   `Heating`,
//   `Kitchen`,
//   `Fridge`,
//   `Washing machine`,
//   `Coffee machine`,
//   `Dishwasher`,
//   `Towels`,
//   `Baby seat`,
//   `Cabel TV`,
//   `Air conditioning`,
//   `Minibar`,
//   `Safety deposit box`,
//   `Spa and wellness centre`,
//   `Family rooms`,
//   `Airport shuttle`,
//   `Non-smoking rooms`,
//   `Fitness centre`,
//   `Bar`,
// ];

const reviews = [
  `The hotel is fantastically located - you can walk everywhere. All staff were extremely helpful & friendly.`,
  `The gym, spa & pool is very luxurious. We didn’t eat at hotel (only coffees) but the lounge area was very comfortable. The room size is very good for Paris (which is known for small rooms).`,
  `The location was perfect, the staff were so accommodating and lovely. The room was spotless. I will definitely recommend this hotel to my friends and family. This hotel is now my 1st choice of accommodation when I travel to Paris.”`,
  `I stay here everytime I travel to Paris and it is my favourite hotel by far. The staff are exceptionally welcoming and always go above and beyond to facilitate any request I have no matter what.`,
  `Design interior, room with balcony, bar area. Staff`,
  `Amazing hotel in a great location. The staff were very welcoming in particular Arthur who helped me with arrangements for the room. I would highly recommend!`,
  `I loved the location,the fact that it was new,everything worked! Loved the Jo Malone toiletries. The concierge was very helpful organising ballooned I requested for my daughter,so big Thank you! `,
  `Amazing accommodation. Looked after superbly by Arthur and the team. A trip to remember. Thank you!`,
  `Perfect location and big suite with all the comforts. Great and kind staff, keen to help.`,
  `Nice hotel in the center of Paris with the Eiffel Tower view. Good breakfast.`,
  `Fantastic service, thank you very much for the complimentary champagne for my mums birthday it was so kind. I will be recommending to friends.`,
  `The breakfast was excellent with so much choice. The fitness centre looked great.( unfortunately ran out of time to use it 😬).`,
  `Everything! Amazing location with an INCREDIBLE view of the Eiffel Tower. The room was lovely & comfortable for a family of 3. Breakfast in the restaurant was unreal, so much variety!`,
  `I loved the pork for breakfast with the salty cheese and the baby potatoes! The room view (club access Eiffel tower view room).`,
];

const getRandomDate = () => {
  const start = new Date(`December 1, 2018`);
  const end = new Date();
  return new Date(+start + Math.random() * (end - start));
};

const getRandomAvatar = () => {
  return avatarUrl + Math.floor((Math.random() * 100));
};

// const getRandomBoolean = () => {
//   return Math.random() > 0.5;
// };

// const getImgUrl = (pictCount) => {
//   const pictures = [];
//   for (let i = 1; i <= pictCount; i++) {
//     const url = `${imageUrl}${Math.floor(Math.random() * 1000)}`;
//     pictures.push(url);
//   }
//   return pictures;
// };

// const getRandomArray = (array) => array.filter(() => getRandomBoolean());

const getRandomArrayItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// const generateOffer = () => {
//   return {
//     bedrooms: Math.floor(Math.random() * MAX__BEDROOMS),
//     city: getRandomArrayItem(cities),
//     description: getRandomArray(descriptions).slice(0, MAX_DESCRIPTIONS),
//     features: getRandomArray(features),
//     guests: Math.floor(Math.random() * MAX_GUESTS),
//     host: {
//       avatar: getRandomAvatar(),
//       name: getRandomArrayItem(hostNames),
//       pro: getRandomBoolean(),
//     },
//     isFavorite: getRandomBoolean(),
//     pictures: getImgUrl(MAX_IMAGES),
//     premium: getRandomBoolean(),
//     price: Math.floor(Math.random() * MAX_PRICE),
//     rating: Math.floor((Math.random() * 50)) / 10,
//     title: getRandomArrayItem(titles),
//     type: getRandomArrayItem(types),
//   };
// };

const generateReview = () => {
  return {
    avatar: getRandomAvatar(),
    date: getRandomDate(),
    name: getRandomArrayItem(hostNames),
    rating: Math.floor((Math.random() * 50)) / 10,
    content: getRandomArrayItem(reviews),
  };
};

const generateMockArray = (itemNumber, foo) => {
  const newArray = [];
  for (let i = 0; i < itemNumber; i++) {
    let item = foo();
    item.id = i;
    newArray.push(item);
  }
  return newArray;
};

// const offers = generateMockArray(offersCount, generateOffer);

const offerReviews = generateMockArray(offersCount, generateReview);

const offersCoordinates = {
  Paris: [
    [48.87304, 2.36760],
    [48.86717, 2.33875],
    [48.85905, 2.32639],
    [48.86131, 2.36211]
  ],
  Cologne: [
    [50.93916, 6.95087],
    [50.94695, 6.96117],
    [50.93397, 6.95671],
    [50.93376, 6.96083]
  ],
  Brussels: [
    [50.85475, 4.34939],
    [50.84619, 4.37583],
    [50.84446, 4.33342],
    [50.83525, 4.36141]
  ],
  Amsterdam: [
    [52.3909553943508, 4.85309666406198],
    [52.369553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198]
  ],
  Hamburg: [
    [53.55181, 9.98233],
    [53.55393, 10.00042],
    [53.54894, 9.99321],
    [53.54730, 9.98102]
  ],
  Dusseldorf: [
    [51.23042, 6.78342],
    [51.22784, 6.80402],
    [51.22612, 6.77380],
    [51.21881, 51.21881]
  ],
};

const citiesCoordinates = {
  Amsterdam: [52.38333, 4.9],
  Brussels: [50.85045, 4.34878],
  Cologne: [50.93333, 6.95],
  Dusseldorf: [51.22172, 6.77616],
  Hamburg: [53.57532, 10.01534],
  Paris: [48.85341, 2.3488],
};

const offers = [
  {
    bedrooms: 9,
    city: `Dusseldorf`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `Professional and friendly staff will do everything to make clients feel like at home. It’s important for us to leave you only positive emotions and an excellent mood.`],
    features: [`Heating`, `Kitchen`, `Washing machine`, `Coffee machine`, `Baby seat`, `Cabel TV`, `Minibar`, `Safety deposit box`, `Spa and wellness centre`, `Non-smoking rooms`, `Bar`],
    guests: 10,
    host: {
      avatar: `https://api.adorable.io/avatars/44`,
      name: `Amelia`,
      pro: false
    },
    isFavorite: true,
    location: [51.23042, 6.78342],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=325`, `https://source.unsplash.com/collection/1163637/260x200?sig=85`, `https://source.unsplash.com/collection/1163637/260x200?sig=195`, `https://source.unsplash.com/collection/1163637/260x200?sig=449`, `https://source.unsplash.com/collection/1163637/260x200?sig=963`, `https://source.unsplash.com/collection/1163637/260x200?sig=415`],
    premium: false,
    price: 283,
    rating: 4.8,
    title: `Four Seasons Hotel Lion Palace`,
    type: `Hotel`,
    id: 20
  }, {
    bedrooms: 7,
    city: `Dusseldorf`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `Professional and friendly staff will do everything to make clients feel like at home. It’s important for us to leave you only positive emotions and an excellent mood.`],
    features: [`Fridge`, `Coffee machine`, `Baby seat`, `Air conditioning`, `Minibar`, `Spa and wellness centre`, `Family rooms`, `Non-smoking rooms`],
    guests: 24,
    host: {
      avatar: `https://api.adorable.io/avatars/65`,
      name: `Margaret`,
      pro: true
    },
    isFavorite: true,
    location: [51.22784, 6.80402],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=420`, `https://source.unsplash.com/collection/1163637/260x200?sig=876`, `https://source.unsplash.com/collection/1163637/260x200?sig=502`, `https://source.unsplash.com/collection/1163637/260x200?sig=913`, `https://source.unsplash.com/collection/1163637/260x200?sig=473`, `https://source.unsplash.com/collection/1163637/260x200?sig=237`],
    premium: true,
    price: 965,
    rating: 3.5,
    title: `Four Seasons Hotel Lion Palace`,
    type: `Guest house`,
    id: 21
  }, {
    bedrooms: 5,
    city: `Dusseldorf`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `The history of surroundings is truly rich and attractive from a cultural point of view. In this area reigns the atmosphere of Pushkin, bohemian and aristocratic Petersburg.`],
    features: [`Heating`, `Fridge`, `Dishwasher`, `Baby seat`, `Cabel TV`, `Air conditioning`, `Minibar`, `Safety deposit box`, `Family rooms`, `Airport shuttle`, `Bar`],
    guests: 28,
    host: {
      avatar: `https://api.adorable.io/avatars/36`,
      name: `Victoria`,
      pro: true
    },
    isFavorite: false,
    location: [51.22612, 6.77380],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=500`, `https://source.unsplash.com/collection/1163637/260x200?sig=863`, `https://source.unsplash.com/collection/1163637/260x200?sig=368`, `https://source.unsplash.com/collection/1163637/260x200?sig=572`, `https://source.unsplash.com/collection/1163637/260x200?sig=214`, `https://source.unsplash.com/collection/1163637/260x200?sig=577`],
    premium: false,
    price: 697,
    rating: 0.5,
    title: `Belmond Grand Hotel Europe`,
    type: `Apartment`,
    id: 22
  }, {
    bedrooms: 3,
    city: `Dusseldorf`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `Professional and friendly staff will do everything to make clients feel like at home. It’s important for us to leave you only positive emotions and an excellent mood.`],
    features: [`Kitchen`, `Fridge`, `Towels`, `Baby seat`, `Cabel TV`, `Air conditioning`, `Minibar`, `Family rooms`, `Airport shuttle`, `Bar`],
    guests: 2,
    host: {
      avatar: `https://api.adorable.io/avatars/94`,
      name: `Amelia`,
      pro: true
    },
    isFavorite: false,
    location: [51.21881, 51.21881],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=359`, `https://source.unsplash.com/collection/1163637/260x200?sig=332`, `https://source.unsplash.com/collection/1163637/260x200?sig=793`, `https://source.unsplash.com/collection/1163637/260x200?sig=540`, `https://source.unsplash.com/collection/1163637/260x200?sig=369`, `https://source.unsplash.com/collection/1163637/260x200?sig=989`],
    premium: true,
    price: 87,
    rating: 3.8,
    title: `Majestic Boutique Hotel Deluxe`,
    type: `Villa`,
    id: 23
  },
  {
    bedrooms: 7,
    city: `Paris`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `Our warm and friendly team is always there to help you with whatever questions you may have. Having a vast knowledge of the local area we’ll gladly offer you valuable advice on how to plan your day, arrange guided tours in the city & the suburbs.`],
    features: [`Wi-Fi`, `Heating`, `Washing machine`, `Dishwasher`, `Cabel TV`, `Minibar`, `Safety deposit box`, `Spa and wellness centre`, `Family rooms`, `Non-smoking rooms`, `Fitness centre`, `Bar`],
    guests: 5,
    host: {
      avatar: `https://api.adorable.io/avatars/91`,
      name: `Ann`,
      pro: true
    },
    isFavorite: false,
    location: [48.87304, 2.36760],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=10`, `https://source.unsplash.com/collection/1163637/260x200?sig=866`, `https://source.unsplash.com/collection/1163637/260x200?sig=469`, `https://source.unsplash.com/collection/1163637/260x200?sig=154`, `https://source.unsplash.com/collection/1163637/260x200?sig=788`, `https://source.unsplash.com/collection/1163637/260x200?sig=679`],
    premium: true,
    price: 809,
    rating: 2.5,
    title: `Bed&Bath Luxury Apartments`,
    type: `Hotel`,
    id: 0
  }, {
    bedrooms: 8,
    city: `Paris`,
    description: [`An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`, `Our warm and friendly team is always there to help you with whatever questions you may have. Having a vast knowledge of the local area we’ll gladly offer you valuable advice on how to plan your day, arrange guided tours in the city & the suburbs.`],
    features: [`Wi-Fi`, `Heating`, `Fridge`, `Washing machine`, `Baby seat`, `Air conditioning`, `Minibar`, `Spa and wellness centre`, `Airport shuttle`, `Bar`],
    guests: 17,
    host: {
      avatar: `https://api.adorable.io/avatars/19`,
      name: `Amelia`,
      pro: true
    },
    isFavorite: true,
    location: [48.86717, 2.33875],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=259`, `https://source.unsplash.com/collection/1163637/260x200?sig=668`, `https://source.unsplash.com/collection/1163637/260x200?sig=880`, `https://source.unsplash.com/collection/1163637/260x200?sig=988`, `https://source.unsplash.com/collection/1163637/260x200?sig=248`, `https://source.unsplash.com/collection/1163637/260x200?sig=812`],
    premium: false,
    price: 388,
    rating: 2.2,
    title: `Radisson Sonya Hotel`,
    type: `Villa`,
    id: 1
  }, {
    bedrooms: 8,
    city: `Paris`,
    description: [`An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`, `Our warm and friendly team is always there to help you with whatever questions you may have. Having a vast knowledge of the local area we’ll gladly offer you valuable advice on how to plan your day, arrange guided tours in the city & the suburbs.`],
    features: [`Wi-Fi`, `Kitchen`, `Fridge`, `Coffee machine`, `Dishwasher`, `Cabel TV`, `Air conditioning`, `Minibar`, `Safety deposit box`, `Family rooms`, `Airport shuttle`, `Non-smoking rooms`],
    guests: 2,
    host: {
      avatar: `https://api.adorable.io/avatars/97`,
      name: `Peter`,
      pro: true
    },
    isFavorite: true,
    location: [48.85905, 2.32639],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=471`, `https://source.unsplash.com/collection/1163637/260x200?sig=36`, `https://source.unsplash.com/collection/1163637/260x200?sig=799`, `https://source.unsplash.com/collection/1163637/260x200?sig=699`, `https://source.unsplash.com/collection/1163637/260x200?sig=546`, `https://source.unsplash.com/collection/1163637/260x200?sig=565`],
    premium: false,
    price: 122,
    rating: 2.7,
    title: `Akyan St.Petersburg`,
    type: `Hotel`,
    id: 2
  }, {
    bedrooms: 5,
    city: `Paris`,
    description: [`An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`, `We offer diverse accommodations: comfortable standard and superior rooms, suites equipped with Jacuzzi and sauna. WiFi internet is complimentary.`],
    features: [`Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Baby seat`, `Minibar`, `Spa and wellness centre`, `Non-smoking rooms`],
    guests: 0,
    host: {
      avatar: `https://api.adorable.io/avatars/9`,
      name: `Ann`,
      pro: true
    },
    isFavorite: true,
    location: [48.86131, 2.36211],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=587`, `https://source.unsplash.com/collection/1163637/260x200?sig=516`, `https://source.unsplash.com/collection/1163637/260x200?sig=243`, `https://source.unsplash.com/collection/1163637/260x200?sig=316`, `https://source.unsplash.com/collection/1163637/260x200?sig=859`, `https://source.unsplash.com/collection/1163637/260x200?sig=747`],
    premium: true,
    price: 945,
    rating: 4.7,
    title: `Four Seasons Hotel Lion Palace`,
    type: `Villa`,
    id: 3
  },
  {
    bedrooms: 9,
    city: `Cologne`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `Professional and friendly staff will do everything to make clients feel like at home. It’s important for us to leave you only positive emotions and an excellent mood.`],
    features: [`Heating`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Air conditioning`, `Minibar`, `Spa and wellness centre`, `Family rooms`, `Non-smoking rooms`, `Bar`],
    guests: 9,
    host: {
      avatar: `https://api.adorable.io/avatars/69`,
      name: `Triss`,
      pro: false
    },
    isFavorite: false,
    location: [50.93916, 6.95087],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=681`, `https://source.unsplash.com/collection/1163637/260x200?sig=873`, `https://source.unsplash.com/collection/1163637/260x200?sig=677`, `https://source.unsplash.com/collection/1163637/260x200?sig=735`, `https://source.unsplash.com/collection/1163637/260x200?sig=589`, `https://source.unsplash.com/collection/1163637/260x200?sig=353`],
    premium: false,
    price: 573,
    rating: 2.2,
    title: `Belmond Grand Hotel Europe`,
    type: `Guest house`,
    id: 4
  }, {
    bedrooms: 2,
    city: `Cologne`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    features: [`Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`, `Air conditioning`, `Minibar`, `Safety deposit box`, `Spa and wellness centre`, `Airport shuttle`, `Non-smoking rooms`, `Fitness centre`],
    guests: 13,
    host: {
      avatar: `https://api.adorable.io/avatars/91`,
      name: `Sofia`,
      pro: false
    },
    isFavorite: true,
    location: [50.94695, 6.96117],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=65`, `https://source.unsplash.com/collection/1163637/260x200?sig=189`, `https://source.unsplash.com/collection/1163637/260x200?sig=352`, `https://source.unsplash.com/collection/1163637/260x200?sig=800`, `https://source.unsplash.com/collection/1163637/260x200?sig=922`, `https://source.unsplash.com/collection/1163637/260x200?sig=551`],
    premium: false,
    price: 866,
    rating: 0.2,
    title: `Rocco Forte Astoria Hotel`,
    type: `Guest house`,
    id: 5
  }, {
    bedrooms: 6,
    city: `Cologne`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    features: [`Kitchen`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Baby seat`, `Cabel TV`, `Air conditioning`, `Minibar`, `Spa and wellness centre`, `Non-smoking rooms`, `Fitness centre`, `Bar`],
    guests: 20,
    host: {
      avatar: `https://api.adorable.io/avatars/25`,
      name: `Cameron`,
      pro: true
    },
    isFavorite: false,
    location: [50.93397, 6.95671],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=557`, `https://source.unsplash.com/collection/1163637/260x200?sig=553`, `https://source.unsplash.com/collection/1163637/260x200?sig=399`, `https://source.unsplash.com/collection/1163637/260x200?sig=592`, `https://source.unsplash.com/collection/1163637/260x200?sig=89`, `https://source.unsplash.com/collection/1163637/260x200?sig=254`],
    premium: true,
    price: 524,
    rating: 0.3,
    title: `Park Inn by Radisson Nevsky`,
    type: `Apartment`,
    id: 6
  }, {
    bedrooms: 7,
    city: `Cologne`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    features: [`Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Baby seat`, `Cabel TV`, `Minibar`, `Safety deposit box`, `Spa and wellness centre`, `Family rooms`, `Non-smoking rooms`, `Bar`],
    guests: 0,
    host: {
      avatar: `https://api.adorable.io/avatars/94`,
      name: `Peter`,
      pro: false
    },
    isFavorite: false,
    location: [50.93376, 6.96083],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=576`, `https://source.unsplash.com/collection/1163637/260x200?sig=959`, `https://source.unsplash.com/collection/1163637/260x200?sig=977`, `https://source.unsplash.com/collection/1163637/260x200?sig=766`, `https://source.unsplash.com/collection/1163637/260x200?sig=451`, `https://source.unsplash.com/collection/1163637/260x200?sig=880`],
    premium: true,
    price: 699,
    rating: 1.2,
    title: `Bed&Bath Luxury Apartments`,
    type: `Hotel`,
    id: 7
  },
  {
    bedrooms: 8,
    city: `Brussels`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    features: [`Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Air conditioning`, `Spa and wellness centre`, `Family rooms`, `Fitness centre`],
    guests: 27,
    host: {
      avatar: `https://api.adorable.io/avatars/71`,
      name: `Cameron`,
      pro: true
    },
    isFavorite: true,
    location: [50.85475, 4.34939],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=131`, `https://source.unsplash.com/collection/1163637/260x200?sig=849`, `https://source.unsplash.com/collection/1163637/260x200?sig=625`, `https://source.unsplash.com/collection/1163637/260x200?sig=902`, `https://source.unsplash.com/collection/1163637/260x200?sig=343`, `https://source.unsplash.com/collection/1163637/260x200?sig=615`],
    premium: true,
    price: 853,
    rating: 4.1,
    title: `Grani Aparthotel`,
    type: `Apartment`,
    id: 8
  }, {
    bedrooms: 7,
    city: `Brussels`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `The history of surroundings is truly rich and attractive from a cultural point of view. In this area reigns the atmosphere of Pushkin, bohemian and aristocratic Petersburg.`],
    features: [`Wi-Fi`, `Fridge`, `Dishwasher`, `Cabel TV`, `Fitness centre`, `Bar`],
    guests: 29,
    host: {
      avatar: `https://api.adorable.io/avatars/88`,
      name: `Scarlett`,
      pro: false
    },
    isFavorite: true,
    location: [50.84619, 4.37583],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=193`, `https://source.unsplash.com/collection/1163637/260x200?sig=85`, `https://source.unsplash.com/collection/1163637/260x200?sig=235`, `https://source.unsplash.com/collection/1163637/260x200?sig=154`, `https://source.unsplash.com/collection/1163637/260x200?sig=141`, `https://source.unsplash.com/collection/1163637/260x200?sig=676`],
    premium: true,
    price: 622,
    rating: 0.5,
    title: `Angleterre Hotel`,
    type: `Apartment`,
    id: 9
  }, {
    bedrooms: 8,
    city: `Brussels`,
    description: [`Professional and friendly staff will do everything to make clients feel like at home. It’s important for us to leave you only positive emotions and an excellent mood.`, `The history of surroundings is truly rich and attractive from a cultural point of view. In this area reigns the atmosphere of Pushkin, bohemian and aristocratic Petersburg.`],
    features: [`Wi-Fi`, `Dishwasher`, `Cabel TV`, `Safety deposit box`, `Spa and wellness centre`],
    guests: 12,
    host: {
      avatar: `https://api.adorable.io/avatars/77`,
      name: `Mustapha`,
      pro: true
    },
    isFavorite: true,
    location: [50.84446, 4.33342],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=292`, `https://source.unsplash.com/collection/1163637/260x200?sig=746`, `https://source.unsplash.com/collection/1163637/260x200?sig=546`, `https://source.unsplash.com/collection/1163637/260x200?sig=159`, `https://source.unsplash.com/collection/1163637/260x200?sig=931`, `https://source.unsplash.com/collection/1163637/260x200?sig=908`],
    premium: false,
    price: 828,
    rating: 2.5,
    title: `Bed&Bath Luxury Apartments`,
    type: `Hostel`,
    id: 10
  }, {
    bedrooms: 2,
    city: `Brussels`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    features: [`Heating`, `Coffee machine`, `Dishwasher`, `Baby seat`, `Air conditioning`, `Safety deposit box`, `Non-smoking rooms`, `Fitness centre`],
    guests: 20,
    host: {
      avatar: `https://api.adorable.io/avatars/14`,
      name: `Amelia`,
      pro: false
    },
    isFavorite: false,
    location: [50.83525, 4.36141],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=542`, `https://source.unsplash.com/collection/1163637/260x200?sig=298`, `https://source.unsplash.com/collection/1163637/260x200?sig=250`, `https://source.unsplash.com/collection/1163637/260x200?sig=274`, `https://source.unsplash.com/collection/1163637/260x200?sig=106`, `https://source.unsplash.com/collection/1163637/260x200?sig=40`],
    premium: true,
    price: 621,
    rating: 0.1,
    title: `Grani Aparthotel`,
    type: `Hotel`,
    id: 11
  },
  {
    bedrooms: 5,
    city: `Amsterdam`,
    description: [`An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`, `Professional and friendly staff will do everything to make clients feel like at home. It’s important for us to leave you only positive emotions and an excellent mood.`],
    features: [`Kitchen`, `Coffee machine`, `Baby seat`, `Cabel TV`, `Family rooms`, `Airport shuttle`, `Non-smoking rooms`, `Fitness centre`],
    guests: 12,
    host: {
      avatar: `https://api.adorable.io/avatars/57`,
      name: `Mustapha`,
      pro: true
    },
    isFavorite: true,
    location: [52.3909553943508, 4.85309666406198],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=108`, `https://source.unsplash.com/collection/1163637/260x200?sig=19`, `https://source.unsplash.com/collection/1163637/260x200?sig=153`, `https://source.unsplash.com/collection/1163637/260x200?sig=490`, `https://source.unsplash.com/collection/1163637/260x200?sig=394`, `https://source.unsplash.com/collection/1163637/260x200?sig=793`],
    premium: false,
    price: 946,
    rating: 1.3,
    title: `Original Sokos Hotel Olympia Garden`,
    type: `Hotel`,
    id: 12
  }, {
    bedrooms: 9,
    city: `Amsterdam`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `The hotel is situated in a quiet courtyard. This, together with comfortable beds, provides for a good night’s rest. Among other advantages - free WiFi, continental breakfast and complimentary cold & hot drinking water.`],
    features: [`Wi-Fi`, `Kitchen`, `Fridge`, `Washing machine`, `Cabel TV`, `Air conditioning`, `Safety deposit box`, `Spa and wellness centre`, `Family rooms`, `Bar`],
    guests: 27,
    host: {
      avatar: `https://api.adorable.io/avatars/95`,
      name: `Ann`,
      pro: false
    },
    isFavorite: false,
    location: [52.369553943508, 4.85309666406198],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=656`, `https://source.unsplash.com/collection/1163637/260x200?sig=636`, `https://source.unsplash.com/collection/1163637/260x200?sig=938`, `https://source.unsplash.com/collection/1163637/260x200?sig=952`, `https://source.unsplash.com/collection/1163637/260x200?sig=375`, `https://source.unsplash.com/collection/1163637/260x200?sig=943`],
    premium: true,
    price: 835,
    rating: 4.4,
    title: `Original Sokos Hotel Olympia Garden`,
    type: `Campsite`,
    id: 13
  }, {
    bedrooms: 3,
    city: `Amsterdam`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `The hotel is situated in a quiet courtyard. This, together with comfortable beds, provides for a good night’s rest. Among other advantages - free WiFi, continental breakfast and complimentary cold & hot drinking water.`],
    features: [`Wi-Fi`, `Coffee machine`, `Dishwasher`, `Baby seat`, `Spa and wellness centre`, `Airport shuttle`, `Fitness centre`, `Bar`],
    guests: 26,
    host: {
      avatar: `https://api.adorable.io/avatars/62`,
      name: `Peter`,
      pro: false
    },
    isFavorite: true,
    location: [52.3909553943508, 4.929309666406198],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=234`, `https://source.unsplash.com/collection/1163637/260x200?sig=374`, `https://source.unsplash.com/collection/1163637/260x200?sig=158`, `https://source.unsplash.com/collection/1163637/260x200?sig=311`, `https://source.unsplash.com/collection/1163637/260x200?sig=981`, `https://source.unsplash.com/collection/1163637/260x200?sig=817`],
    premium: true,
    price: 605,
    rating: 3,
    title: `Angleterre Hotel`,
    type: `Guest house`,
    id: 14
  }, {
    bedrooms: 8,
    city: `Amsterdam`,
    description: [`Professional and friendly staff will do everything to make clients feel like at home. It’s important for us to leave you only positive emotions and an excellent mood.`, `The history of surroundings is truly rich and attractive from a cultural point of view. In this area reigns the atmosphere of Pushkin, bohemian and aristocratic Petersburg.`],
    features: [`Fridge`, `Coffee machine`, `Dishwasher`, `Baby seat`, `Safety deposit box`, `Family rooms`, `Bar`],
    guests: 13,
    host: {
      avatar: `https://api.adorable.io/avatars/41`,
      name: `Scarlett`,
      pro: false
    },
    isFavorite: true,
    location: [52.3809553943508, 4.939309666406198],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=278`, `https://source.unsplash.com/collection/1163637/260x200?sig=919`, `https://source.unsplash.com/collection/1163637/260x200?sig=587`, `https://source.unsplash.com/collection/1163637/260x200?sig=356`, `https://source.unsplash.com/collection/1163637/260x200?sig=501`, `https://source.unsplash.com/collection/1163637/260x200?sig=632`],
    premium: false,
    price: 140,
    rating: 2.5,
    title: `Akyan St.Petersburg`,
    type: `Campsite`,
    id: 15
  },
  {
    bedrooms: 1,
    city: `Hamburg`,
    description: [`An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`, `Professional and friendly staff will do everything to make clients feel like at home. It’s important for us to leave you only positive emotions and an excellent mood.`],
    features: [`Wi-Fi`, `Heating`, `Fridge`, `Coffee machine`, `Dishwasher`, `Minibar`, `Safety deposit box`, `Non-smoking rooms`, `Fitness centre`],
    guests: 2,
    host: {
      avatar: `https://api.adorable.io/avatars/94`,
      name: `Mustapha`,
      pro: true
    },
    isFavorite: true,
    location: [53.55181, 9.98233],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=893`, `https://source.unsplash.com/collection/1163637/260x200?sig=677`, `https://source.unsplash.com/collection/1163637/260x200?sig=865`, `https://source.unsplash.com/collection/1163637/260x200?sig=410`, `https://source.unsplash.com/collection/1163637/260x200?sig=652`, `https://source.unsplash.com/collection/1163637/260x200?sig=614`],
    premium: false,
    price: 132,
    rating: 0.6,
    title: `Park Inn by Radisson Nevsky`,
    type: `Villa`,
    id: 16
  }, {
    bedrooms: 2,
    city: `Hamburg`,
    description: [`An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`, `Professional and friendly staff will do everything to make clients feel like at home. It’s important for us to leave you only positive emotions and an excellent mood.`],
    features: [`Heating`, `Kitchen`, `Coffee machine`, `Dishwasher`, `Towels`, `Cabel TV`, `Air conditioning`, `Safety deposit box`, `Family rooms`, `Non-smoking rooms`],
    guests: 22,
    host: {
      avatar: `https://api.adorable.io/avatars/33`,
      name: `Jennifer`,
      pro: false
    },
    isFavorite: true,
    location: [53.55393, 10.00042],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=728`, `https://source.unsplash.com/collection/1163637/260x200?sig=888`, `https://source.unsplash.com/collection/1163637/260x200?sig=830`, `https://source.unsplash.com/collection/1163637/260x200?sig=852`, `https://source.unsplash.com/collection/1163637/260x200?sig=423`, `https://source.unsplash.com/collection/1163637/260x200?sig=421`],
    premium: false,
    price: 410,
    rating: 1.7,
    title: `Rocco Forte Astoria Hotel`,
    type: `Guest house`,
    id: 17
  }, {
    bedrooms: 9,
    city: `Hamburg`,
    description: [`Location of our hotel is just amazing: a minute’s walk from Nevsky Prospect and within minutes of Palace Square & the Hermitage. Art galleries, cafés, restaurants of every kind are all around it. The location is truly unbeatable.`, `We offer diverse accommodations: comfortable standard and superior rooms, suites equipped with Jacuzzi and sauna. WiFi internet is complimentary.`],
    features: [`Heating`, `Washing machine`, `Coffee machine`, `Towels`, `Cabel TV`, `Air conditioning`, `Minibar`, `Fitness centre`],
    guests: 12,
    host: {
      avatar: `https://api.adorable.io/avatars/89`,
      name: `Bec`,
      pro: true
    },
    isFavorite: true,
    location: [53.54894, 9.99321],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=675`, `https://source.unsplash.com/collection/1163637/260x200?sig=783`, `https://source.unsplash.com/collection/1163637/260x200?sig=664`, `https://source.unsplash.com/collection/1163637/260x200?sig=731`, `https://source.unsplash.com/collection/1163637/260x200?sig=107`, `https://source.unsplash.com/collection/1163637/260x200?sig=894`],
    premium: false,
    price: 954,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `Villa`,
    id: 18
  }, {
    bedrooms: 5,
    city: `Hamburg`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    features: [`Kitchen`, `Washing machine`, `Coffee machine`, `Towels`, `Spa and wellness centre`, `Non-smoking rooms`],
    guests: 27,
    host: {
      avatar: `https://api.adorable.io/avatars/14`,
      name: `Clinton`,
      pro: false
    },
    isFavorite: true,
    location: [53.54730, 9.98102],
    pictures: [`https://source.unsplash.com/collection/1163637/260x200?sig=429`, `https://source.unsplash.com/collection/1163637/260x200?sig=154`, `https://source.unsplash.com/collection/1163637/260x200?sig=504`, `https://source.unsplash.com/collection/1163637/260x200?sig=667`, `https://source.unsplash.com/collection/1163637/260x200?sig=89`, `https://source.unsplash.com/collection/1163637/260x200?sig=683`],
    premium: false,
    price: 603,
    rating: 2.6,
    title: `Majestic Boutique Hotel Deluxe`,
    type: `Hostel`,
    id: 19
  },
];

export {
  offers,
  offerReviews,
  cities,
  citiesCoordinates,
  offersCoordinates
};
