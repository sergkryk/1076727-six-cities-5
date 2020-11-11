const imageUrl = `https://source.unsplash.com/collection/1163637/260x200?sig=`;
const avatarUrl = `https://api.adorable.io/avatars/`;
const MAX_PRICE = 1000;
const MAX__BEDROOMS = 10;
const MAX_GUESTS = 30;
const MAX_DESCRIPTIONS = 2;
const MAX_IMAGES = 6;

const offersCount = 50;

const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

const citiesCoordinates = {
  Amsterdam: [52.38333, 4.9],
  Brussels: [50.85045, 4.34878],
  Cologne: [50.93333, 6.95],
  Dusseldorf: [51.22172, 6.77616],
  Hamburg: [53.57532, 10.01534],
  Paris: [48.85341, 2.3488],
};

// const coordinates = [
//   [52.3909553943508,
//     4.85309666406198],
//   [52.369553943508,
//     4.85309666406198],
//   [52.3909553943508,
//     4.929309666406198],
//   [52.3809553943508,
//     4.939309666406198]
// ];

const titles = [
  `Park Inn by Radisson Nevsky`,
  `Original Sokos Hotel Olympia Garden`,
  `Radisson Sonya Hotel`,
  `Majestic Boutique Hotel Deluxe`,
  `Belmond Grand Hotel Europe`,
  `Rocco Forte Astoria Hotel`,
  `Angleterre Hotel`,
  `Four Seasons Hotel Lion Palace`,
  `Agent Flat Apartment`,
  `Grani Aparthotel`,
  `Apart-Hotel Victoria Bolshaya Morskaya 3-5`,
  `Beautiful & luxurious studio at great location`,
  `Bed&Bath Luxury Apartments`,
  `Akyan St.Petersburg`
];

const descriptions = [
  `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  `Professional and friendly staff will do everything to make clients feel like at home. It’s important for us to leave you only positive emotions and an excellent mood.`,
  `The history of surroundings is truly rich and attractive from a cultural point of view. In this area reigns the atmosphere of Pushkin, bohemian and aristocratic Petersburg.`,
  `The hotel is situated in a quiet courtyard. This, together with comfortable beds, provides for a good night’s rest. Among other advantages - free WiFi, continental breakfast and complimentary cold & hot drinking water.`,
  `Our warm and friendly team is always there to help you with whatever questions you may have. Having a vast knowledge of the local area we’ll gladly offer you valuable advice on how to plan your day, arrange guided tours in the city & the suburbs.`,
  `Location of our hotel is just amazing: a minute’s walk from Nevsky Prospect and within minutes of Palace Square & the Hermitage. Art galleries, cafés, restaurants of every kind are all around it. The location is truly unbeatable.`,
  `We offer diverse accommodations: comfortable standard and superior rooms, suites equipped with Jacuzzi and sauna. WiFi internet is complimentary.`,
  `Our warm and friendly team is always there to help you with whatever questions you may think of. Having a vast knowledge of the local area we'll gladly offer you valuable advice on how to plan your day, arrange guided tours in the city & the suburbs.`,
  `Our hotel is superbly located: just a minute’s walk from Nevsky Prospect and within minutes of Palace Square, the Hermitage, the Field of Mars and the Church of Our Savior on Blood. There’s no better location anywhere in the city.`,
];

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

const types = [
  `Hotel`,
  `Apartment`,
  `Guest house`,
  `Villa`,
  `Campsite`,
  `Hostel`
];

const features = [
  `Wi-Fi`,
  `Heating`,
  `Kitchen`,
  `Fridge`,
  `Washing machine`,
  `Coffee machine`,
  `Dishwasher`,
  `Towels`,
  `Baby seat`,
  `Cabel TV`,
  `Air conditioning`,
  `Minibar`,
  `Safety deposit box`,
  `Spa and wellness centre`,
  `Family rooms`,
  `Airport shuttle`,
  `Non-smoking rooms`,
  `Fitness centre`,
  `Bar`,
];

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

const getRandomBoolean = () => {
  return Math.random() > 0.5;
};

const getImgUrl = (pictCount) => {
  const pictures = [];
  for (let i = 1; i <= pictCount; i++) {
    const url = `${imageUrl}${Math.floor(Math.random() * 1000)}`;
    pictures.push(url);
  }
  return pictures;
};

const getRandomArray = (array) => array.filter(() => getRandomBoolean());

const getRandomArrayItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateOffer = () => {
  return {
    bedrooms: Math.floor(Math.random() * MAX__BEDROOMS),
    city: getRandomArrayItem(cities),
    description: getRandomArray(descriptions).slice(0, MAX_DESCRIPTIONS),
    features: getRandomArray(features),
    guests: Math.floor(Math.random() * MAX_GUESTS),
    host: {
      avatar: getRandomAvatar(),
      name: getRandomArrayItem(hostNames),
      pro: getRandomBoolean(),
    },
    isFavorite: getRandomBoolean(),
    pictures: getImgUrl(MAX_IMAGES),
    premium: getRandomBoolean(),
    price: Math.floor(Math.random() * MAX_PRICE),
    rating: Math.floor((Math.random() * 50)) / 10,
    title: getRandomArrayItem(titles),
    type: getRandomArrayItem(types),
  };
};

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
    // if (item.city) {
    //   item.coordinates = coordinates[i];
    // }
  }
  return newArray;
};

const offers = generateMockArray(offersCount, generateOffer);

const offerReviews = generateMockArray(offersCount, generateReview);

export {offers, offerReviews, cities, citiesCoordinates};
