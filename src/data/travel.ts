import { Country } from "./countries.types"
import brussels from "../assets/hobbies/Travel/Brussels - Grand Place.jpg"
import malaysia from "../assets/hobbies/Travel/Malaysian - Batu Caves.jpg"
import nz from "../assets/hobbies/Travel/New Zealand - Hobbiton.jpg"
import singapore from "../assets/hobbies/Travel/Singapore - Supergrove Trees.jpg"

export interface TravelLocation {
  country: Country
  city?: string
  position: [number, number]
  image?: string
  description: string
}

export const travelLocations: TravelLocation[] = [
  // Oceania
  { country: Country.NewZealand, city: "Auckland", image: nz, position: [-36.8485, 174.7633], description: "Volcanoes, beaches, and Hobbiton." },
  { country: Country.NewZealand, city: "Queenstown", position: [-45.03, 168.66], description: "Adventure capital and stunning scenery." },
  { country: Country.Australia, city: "Sydney", position: [-33.87, 151.21], description: "Opera House, beaches, and sunshine." },
  { country: Country.Australia, city: "Gold Coast", position: [-28.02, 153.40], description: "Surf, sand, and skyline." },
  { country: Country.Vanuatu, position: [-15.38, 166.96], description: "Volcanoes, reefs, and tropical paradise." },
  { country: Country.Fiji, position: [-17.71, 178.07], description: "Coral reefs, friendly villages, and island paradise." },

  
  // Europe
  { country: Country.UnitedKingdom, city: "London", position: [51.505, -0.09], description: "A classic highlight!" },
  { country: Country.UnitedKingdom, city: "Edinburgh", position: [55.95, -3.19], description: "Castles, cobblestones, and festivals." },
  { country: Country.Belgium, city: "Brussels", image: brussels, position: [50.85, 4.35], description: "Waffles, EU HQ, and medieval charm." },
  { country: Country.Denmark, city: "Copenhagen", position: [55.68, 12.57], description: "Canals, bikes, and hygge." },
  { country: Country.Germany, city: "Cologne", position: [50.94, 6.96], description: "Cathedral, chocolate, and Rhine River." },
  { country: Country.France, city: "Paris", position: [48.85, 2.35], description: "Eiffel Tower, the Sienne and pastries." },
  { country: Country.Luxembourg, city: "Luxembourg", position: [49.61, 6.13], description: "Castles, forests, and European charm." },
  { country: Country.Germany, city: "Berlin", position: [52.52, 13.40], description: "History, culture, and vibrant nightlife." },
  { country: Country.Germany, city: "Munich", position: [47.55, 10.75], description: "Fairy-tale castle in the Bavarian Alps." },
  { country: Country.Portugal, city: "Lisbon", position: [38.72, -9.14], description: "Hills, trams, and pastel de nata." },
  { country: Country.Italy, city: "Rome", position: [41.90, 12.49], description: "Colosseum, Vatican, and Renaissance art." },
  { country: Country.Netherlands, city: "Amsterdam", position: [52.37, 4.90], description: "Canals, museums, and the red light district." },
  { country: Country.Netherlands, city: "Rotterdam", position: [51.92, 4.48], description: "Windmills, clogs and tulips." },
  { country: Country.Spain, city: "Barcelona", position: [41.38, 2.17], description: "Gaudi architecture, tapas and beaches." },
  { country: Country.Switzerland, city: "Zurich", position: [47.37, 8.54], description: "Lakes, mountains and Swiss chocolate." },
  { country: Country.Austria, city: "Vienna", position: [48.21, 16.37], description: "Cute houses and classical music." },
  { country: Country.Hungary, city: "Budapest", position: [47.50, 19.04], description: "Castle lookout, ceramics and langos." },
  { country: Country.Slovakia, city: "Bratislava", position: [48.15, 17.11], description: "Castle, old town and Danube river." },
  
  // Asia
  { country: Country.Japan, city: "Tokyo", position: [35.6762, 139.6503], description: "Sushi, neon lights, and shrines." },
  { country: Country.Japan, city: "Osaka", position: [34.69, 135.50], description: "Street food, culture, and nightlife." },
  { country: Country.Philippines, city: "Manila", position: [13.41, 122.56], description: "Islands, beaches, and culture." },
  { country: Country.Philippines, city: "Palawan", position: [13.41, 122.56], description: "Islands, beaches, and culture." },
  { country: Country.Vietnam, position: [14.06, 108.28], description: "Pho, history, and beautiful landscapes." },
  { country: Country.Cambodia, position: [12.57, 104.99], description: "Temples of Angkor and rich history." },
  { country: Country.Singapore, image: singapore, position: [1.35, 103.82], description: "Futuristic city meets cultural heritage." },
  { country: Country.Malaysia, image: malaysia, position: [4.21, 101.97], description: "Rainforests, food, and diverse cities." },

  // Africa
  { country: Country.Egypt, position: [26.82, 30.80], description: "Pyramids, Nile River, and ancient wonders." },
  { country: Country.Jordan, position: [31.24, 36.51], description: "Petra, deserts, and warm hospitality." },
  { country: Country.UnitedArabEmirates, city: "Dubai", position: [25.20, 55.27], description: "Skyscrapers, luxury, and desert adventures." },

  // North America
  { country: Country.Canada, position: [56.13, -106.35], description: "Mountains, lakes, and maple syrup." },
  { country: Country.UnitedStates, position: [37.09, -95.71], description: "National parks, cities, and culture." },
  { country: Country.Mexico, position: [23.63, -102.55], description: "Tacos, ruins, and vibrant traditions." },
  { country: Country.Guatemala, position: [15.78, -90.23], description: "Volcanoes, Mayan ruins, and lakes." },
  { country: Country.Belize, position: [17.19, -88.50], description: "Barrier reef, jungle, and blue waters." },
  
  // South America
  { country: Country.Peru, position: [-9.19, -75.02], description: "Machu Picchu, Andes, and rich history." },
]
