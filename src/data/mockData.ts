import type { Restaurant } from "@/types/restaurant";

const londonRestaurants: Array<Omit<Restaurant, "city">> = [
  {
    id: 1,
    name: "McDonald's King's Cross",
    latitude: 51.5302,
    longitude: -0.1238,
    googleRating: 4.4,
    reviewCount: 3841,
    aiScore: 94,
    friesScore: 97,
    burgerScore: 92,
    cleanlinessScore: 95,
    speedScore: 91,
    staffScore: 93,
    orderAccuracyScore: 89,
    summary:
      "Exceptionally consistent during the morning rush, with crisp fries, spotless dining areas, and a team that keeps queues moving.",
    awards: ["Best Fries", "Top Rated"],
  },
  {
    id: 2,
    name: "McDonald's Liverpool Street",
    latitude: 51.5178,
    longitude: -0.0824,
    googleRating: 4.3,
    reviewCount: 4627,
    aiScore: 92,
    friesScore: 91,
    burgerScore: 94,
    cleanlinessScore: 90,
    speedScore: 95,
    staffScore: 89,
    orderAccuracyScore: 92,
    summary:
      "A polished city branch praised for fast service, reliable orders, and burgers that arrive hot even at the busiest times.",
    awards: ["Fast Service", "Best Burgers"],
  },
  {
    id: 3,
    name: "McDonald's Notting Hill Gate",
    latitude: 51.5092,
    longitude: -0.196,
    googleRating: 4.5,
    reviewCount: 2186,
    aiScore: 90,
    friesScore: 89,
    burgerScore: 90,
    cleanlinessScore: 94,
    speedScore: 84,
    staffScore: 95,
    orderAccuracyScore: 91,
    summary:
      "A neighbourhood favourite with warm service and an unusually calm, well-kept dining room. Reviewers love its consistency.",
    awards: ["Best Staff", "Hidden Gem"],
  },
  {
    id: 4,
    name: "McDonald's Victoria Street",
    latitude: 51.4978,
    longitude: -0.1409,
    googleRating: 4.2,
    reviewCount: 5360,
    aiScore: 88,
    friesScore: 90,
    burgerScore: 87,
    cleanlinessScore: 86,
    speedScore: 92,
    staffScore: 84,
    orderAccuracyScore: 88,
    summary:
      "Built for commuters: quick, dependable, and impressively composed at peak hours. Fries are a recurring highlight.",
    awards: ["Fast Service"],
  },
  {
    id: 5,
    name: "McDonald's Leicester Square",
    latitude: 51.5103,
    longitude: -0.1301,
    googleRating: 4.3,
    reviewCount: 8214,
    aiScore: 86,
    friesScore: 94,
    burgerScore: 88,
    cleanlinessScore: 82,
    speedScore: 86,
    staffScore: 83,
    orderAccuracyScore: 79,
    summary:
      "High-volume and energetic, this central branch wins on golden fries and speed despite the constant theatre-district crowds.",
    awards: ["Best Fries", "Crowd Favourite"],
  },
  {
    id: 6,
    name: "McDonald's Borough High Street",
    latitude: 51.5044,
    longitude: -0.0912,
    googleRating: 4.1,
    reviewCount: 2933,
    aiScore: 84,
    friesScore: 85,
    burgerScore: 89,
    cleanlinessScore: 86,
    speedScore: 80,
    staffScore: 87,
    orderAccuracyScore: 82,
    summary:
      "Friendly service and carefully assembled burgers make this a dependable stop near Borough Market.",
    awards: ["Hidden Gem", "Best Burgers"],
  },
  {
    id: 7,
    name: "McDonald's High Street Kensington",
    latitude: 51.5004,
    longitude: -0.1925,
    googleRating: 4.0,
    reviewCount: 2451,
    aiScore: 82,
    friesScore: 84,
    burgerScore: 83,
    cleanlinessScore: 91,
    speedScore: 77,
    staffScore: 82,
    orderAccuracyScore: 85,
    summary:
      "Bright, tidy, and relaxed by central London standards. It scores especially well for cleanliness and order accuracy.",
    awards: ["Spotless"],
  },
  {
    id: 8,
    name: "McDonald's Brixton Road",
    latitude: 51.4614,
    longitude: -0.1156,
    googleRating: 4.1,
    reviewCount: 3518,
    aiScore: 80,
    friesScore: 86,
    burgerScore: 81,
    cleanlinessScore: 78,
    speedScore: 83,
    staffScore: 85,
    orderAccuracyScore: 76,
    summary:
      "Lively and welcoming, with cheerful staff and reliably fresh fries. Late-night demand can affect order accuracy.",
    awards: ["Local Favourite"],
  },
  {
    id: 9,
    name: "McDonald's Camden High Street",
    latitude: 51.5392,
    longitude: -0.1426,
    googleRating: 3.9,
    reviewCount: 4942,
    aiScore: 78,
    friesScore: 81,
    burgerScore: 80,
    cleanlinessScore: 73,
    speedScore: 85,
    staffScore: 79,
    orderAccuracyScore: 74,
    summary:
      "A rapid, no-fuss branch that handles Camden's footfall well. Best for a quick order rather than a long sit-down.",
    awards: ["Fast Service"],
  },
  {
    id: 10,
    name: "McDonald's Stratford Centre",
    latitude: 51.5416,
    longitude: -0.0038,
    googleRating: 3.8,
    reviewCount: 3106,
    aiScore: 76,
    friesScore: 77,
    burgerScore: 82,
    cleanlinessScore: 75,
    speedScore: 79,
    staffScore: 76,
    orderAccuracyScore: 72,
    summary:
      "A practical shopping-centre stop with solid burgers and reasonable speed. Consistency varies during weekend peaks.",
    awards: ["Good Value"],
  },
  {
    id: 11,
    name: "McDonald's Old Kent Road",
    latitude: 51.4813,
    longitude: -0.0639,
    googleRating: 3.6,
    reviewCount: 2274,
    aiScore: 72,
    friesScore: 74,
    burgerScore: 76,
    cleanlinessScore: 68,
    speedScore: 75,
    staffScore: 73,
    orderAccuracyScore: 66,
    summary:
      "Convenient and generally quick, though reviewers report uneven cleanliness and occasional missing items at busy times.",
    awards: ["Late Night"],
  },
  {
    id: 12,
    name: "McDonald's Whitechapel",
    latitude: 51.5192,
    longitude: -0.0607,
    googleRating: 3.5,
    reviewCount: 1988,
    aiScore: 68,
    friesScore: 71,
    burgerScore: 70,
    cleanlinessScore: 64,
    speedScore: 72,
    staffScore: 69,
    orderAccuracyScore: 61,
    summary:
      "A busy local branch with friendly moments, but reviews point to inconsistent orders and a dining area that needs attention.",
    awards: ["Open Late"],
  },
];

interface CitySeed {
  city: string;
  latitude: number;
  longitude: number;
  areas: [string, string, string, string, string];
}

const citySeeds: CitySeed[] = [
  {
    city: "Manchester",
    latitude: 53.4808,
    longitude: -2.2426,
    areas: ["Piccadilly", "Oxford Road", "Arndale", "Salford Quays", "Deansgate"],
  },
  {
    city: "Birmingham",
    latitude: 52.4862,
    longitude: -1.8904,
    areas: ["New Street", "Bullring", "Broad Street", "Digbeth", "Five Ways"],
  },
  {
    city: "Liverpool",
    latitude: 53.4084,
    longitude: -2.9916,
    areas: ["Lord Street", "Lime Street", "The Strand", "Edge Lane", "Aigburth"],
  },
  {
    city: "Leeds",
    latitude: 53.8008,
    longitude: -1.5491,
    areas: ["Briggate", "Trinity", "Headrow", "Kirkstall", "White Rose"],
  },
  {
    city: "Glasgow",
    latitude: 55.8642,
    longitude: -4.2518,
    areas: ["Sauchiehall Street", "Argyle Street", "Finnieston", "Partick", "Braehead"],
  },
  {
    city: "Edinburgh",
    latitude: 55.9533,
    longitude: -3.1883,
    areas: ["Princes Street", "Waverley", "Lothian Road", "Leith Walk", "Corstorphine"],
  },
  {
    city: "Bristol",
    latitude: 51.4545,
    longitude: -2.5879,
    areas: ["Broadmead", "Cabot Circus", "Clifton", "Temple Meads", "Bedminster"],
  },
  {
    city: "Cardiff",
    latitude: 51.4816,
    longitude: -3.1791,
    areas: ["Queen Street", "St Mary Street", "Cardiff Bay", "Canton", "Roath"],
  },
  {
    city: "Newcastle",
    latitude: 54.9783,
    longitude: -1.6178,
    areas: ["Northumberland Street", "Grainger Street", "Quayside", "Jesmond", "Byker"],
  },
  {
    city: "Sheffield",
    latitude: 53.3811,
    longitude: -1.4701,
    areas: ["Fargate", "The Moor", "Meadowhall", "Ecclesall Road", "Hillsborough"],
  },
  {
    city: "Nottingham",
    latitude: 52.9548,
    longitude: -1.1581,
    areas: ["Clumber Street", "Victoria Centre", "Lace Market", "Beeston", "Mapperley"],
  },
  {
    city: "Leicester",
    latitude: 52.6369,
    longitude: -1.1398,
    areas: ["Gallowtree Gate", "Highcross", "Belgrave Gate", "Narborough Road", "Oadby"],
  },
  {
    city: "Brighton",
    latitude: 50.8225,
    longitude: -0.1372,
    areas: ["Western Road", "North Street", "Brighton Marina", "London Road", "Hove"],
  },
  {
    city: "Oxford",
    latitude: 51.752,
    longitude: -1.2577,
    areas: ["Cornmarket Street", "Carfax", "Cowley Road", "Headington", "Botley"],
  },
  {
    city: "Cambridge",
    latitude: 52.2053,
    longitude: 0.1218,
    areas: ["Market Square", "Cambridge Station", "Mill Road", "Chesterton", "Newmarket Road"],
  },
  {
    city: "Southampton",
    latitude: 50.9097,
    longitude: -1.4044,
    areas: ["Above Bar", "Westquay", "Portswood", "Ocean Village", "Shirley"],
  },
  {
    city: "Belfast",
    latitude: 54.5973,
    longitude: -5.9301,
    areas: ["Donegall Place", "Victoria Square", "Cathedral Quarter", "Lisburn Road", "Titanic Quarter"],
  },
  {
    city: "Aberdeen",
    latitude: 57.1497,
    longitude: -2.0943,
    areas: ["Union Street", "Bon Accord", "Beach Boulevard", "Rosemount", "Bridge of Don"],
  },
];

const coordinateOffsets = [
  [0.003, -0.004],
  [-0.008, 0.006],
  [0.011, 0.012],
  [-0.014, -0.011],
  [0.018, -0.019],
] as const;

const summaryOpeners = [
  "A dependable city-centre branch",
  "A busy local favourite",
  "A well-run neighbourhood restaurant",
  "A popular stop for commuters",
  "A consistently solid branch",
];

function seededValue(seed: number) {
  const value = Math.sin(seed * 91.345) * 47453.5453;
  return value - Math.floor(value);
}

function clampScore(value: number) {
  return Math.max(60, Math.min(98, Math.round(value)));
}

function createRestaurant(
  citySeed: CitySeed,
  cityIndex: number,
  area: string,
  areaIndex: number,
): Restaurant {
  const id = 13 + cityIndex * 5 + areaIndex;
  const aiScore = 67 + Math.round(seededValue(id) * 28);
  const friesScore = clampScore(aiScore + seededValue(id + 101) * 14 - 7);
  const burgerScore = clampScore(aiScore + seededValue(id + 202) * 14 - 7);
  const cleanlinessScore = clampScore(
    aiScore + seededValue(id + 303) * 16 - 8,
  );
  const speedScore = clampScore(aiScore + seededValue(id + 404) * 16 - 8);
  const staffScore = clampScore(aiScore + seededValue(id + 505) * 14 - 7);
  const orderAccuracyScore = clampScore(
    aiScore + seededValue(id + 606) * 16 - 8,
  );
  const [latitudeOffset, longitudeOffset] = coordinateOffsets[areaIndex];
  const metricScores = [
    ["Best Fries", friesScore],
    ["Best Burgers", burgerScore],
    ["Spotless", cleanlinessScore],
    ["Fast Service", speedScore],
    ["Best Staff", staffScore],
    ["Order Perfect", orderAccuracyScore],
  ] as const;
  const topAward = [...metricScores].sort((a, b) => b[1] - a[1])[0][0];
  const awards = [
    topAward,
    aiScore >= 90
      ? "Top Rated"
      : seededValue(id + 707) > 0.55
        ? "Hidden Gem"
        : "Local Favourite",
  ];

  return {
    id,
    name: `McDonald's ${area}`,
    city: citySeed.city,
    latitude: citySeed.latitude + latitudeOffset,
    longitude: citySeed.longitude + longitudeOffset,
    googleRating: Math.round((3.5 + seededValue(id + 808) * 1.1) * 10) / 10,
    reviewCount: 850 + Math.round(seededValue(id + 909) * 6650),
    aiScore,
    friesScore,
    burgerScore,
    cleanlinessScore,
    speedScore,
    staffScore,
    orderAccuracyScore,
    summary: `${summaryOpeners[areaIndex]} in ${citySeed.city}, praised for ${topAward.toLowerCase()} and a reliable experience throughout the week.`,
    awards,
  };
}

const regionalRestaurants = citySeeds.flatMap((citySeed, cityIndex) =>
  citySeed.areas.map((area, areaIndex) =>
    createRestaurant(citySeed, cityIndex, area, areaIndex),
  ),
);

export const restaurants: Restaurant[] = [
  ...londonRestaurants.map((restaurant) => ({
    ...restaurant,
    city: "London",
  })),
  ...regionalRestaurants,
];
