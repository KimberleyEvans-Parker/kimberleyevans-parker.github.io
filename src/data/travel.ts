
export interface TravelLocation {
  name: string;
  position: [number, number];
  description: string;
}

export const travelLocations: TravelLocation[] = [
  // Oceania
  { name: "Auckland, NZ", position: [-36.8485, 174.7633], description: "Volcanoes, beaches, and Hobbiton." },
  { name: "Queenstown, NZ", position: [-45.03, 168.66], description: "Adventure capital and stunning scenery." },
  { name: "Sydney, Australia", position: [-33.87, 151.21], description: "Opera House, beaches, and sunshine." },
  { name: "Gold Coast, Australia", position: [-28.02, 153.40], description: "Surf, sand, and skyline." },
  { name: "Vanuatu", position: [-15.38, 166.96], description: "Volcanoes, reefs, and tropical paradise." },
  { name: "Fiji", position: [-17.71, 178.07], description: "Coral reefs, friendly villages, and island paradise." },

  
  // Europe
  { name: "London, UK", position: [51.505, -0.09], description: "A classic highlight!" },
  { name: "Edinburgh, Scotland", position: [55.95, -3.19], description: "Castles, cobblestones, and festivals." },
  { name: "Brussels, Belgium", position: [50.85, 4.35], description: "Waffles, EU HQ, and medieval charm." },
  { name: "Copenhagen, Denmark", position: [55.68, 12.57], description: "Canals, bikes, and hygge." },
  { name: "Cologne, Germany", position: [50.94, 6.96], description: "Cathedral, chocolate, and Rhine River." },
  {name: "Paris, France", position: [48.85, 2.35], description: "Eiffel Tower, the Sienne and pastries." },
  
  // Asia
  { name: "Tokyo, Japan", position: [35.6762, 139.6503], description: "Sushi, neon lights, and shrines." },
  { name: "Osaka, Japan", position: [34.69, 135.50], description: "Street food, culture, and nightlife." },
  { name: "Philippines", position: [13.41, 122.56], description: "Islands, beaches, and culture." },
  { name: "Vietnam", position: [14.06, 108.28], description: "Pho, history, and beautiful landscapes." },
  { name: "Cambodia", position: [12.57, 104.99], description: "Temples of Angkor and rich history." },
  { name: "Singapore", position: [1.35, 103.82], description: "Futuristic city meets cultural heritage." },
  { name: "Malaysia", position: [4.21, 101.97], description: "Rainforests, food, and diverse cities." },

  // Africa
  { name: "Egypt", position: [26.82, 30.80], description: "Pyramids, Nile River, and ancient wonders." },
  { name: "Jordan", position: [31.24, 36.51], description: "Petra, deserts, and warm hospitality." },
  { name: "Dubai, UAE", position: [25.20, 55.27], description: "Skyscrapers, luxury, and desert adventures." },

  // North America
  { name: "Canada", position: [56.13, -106.35], description: "Mountains, lakes, and maple syrup." },
  { name: "USA", position: [37.09, -95.71], description: "National parks, cities, and culture." },
  { name: "Mexico", position: [23.63, -102.55], description: "Tacos, ruins, and vibrant traditions." },
  { name: "Guatemala", position: [15.78, -90.23], description: "Volcanoes, Mayan ruins, and lakes." },
  { name: "Belize", position: [17.19, -88.50], description: "Barrier reef, jungle, and blue waters." },
  
  // South America
  { name: "Peru", position: [-9.19, -75.02], description: "Machu Picchu, Andes, and rich history." },
];
