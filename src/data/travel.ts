import { Country } from "./countries.types"

export interface TravelLocation {
  name: string
  country: Country
  city?: string
  position: [number, number]
  description: string
}

export const travelLocations: TravelLocation[] = [
  // Oceania
  { name: "Auckland, NZ", country: Country.NewZealand, position: [-36.8485, 174.7633], description: "Volcanoes, beaches, and Hobbiton." },
  { name: "Queenstown, NZ", country: Country.NewZealand, position: [-45.03, 168.66], description: "Adventure capital and stunning scenery." },
  { name: "Sydney, Australia", country: Country.Australia, position: [-33.87, 151.21], description: "Opera House, beaches, and sunshine." },
  { name: "Gold Coast, Australia", country: Country.Australia, position: [-28.02, 153.40], description: "Surf, sand, and skyline." },
  { name: "Vanuatu", country: Country.Vanuatu, position: [-15.38, 166.96], description: "Volcanoes, reefs, and tropical paradise." },
  { name: "Fiji", country: Country.Fiji, position: [-17.71, 178.07], description: "Coral reefs, friendly villages, and island paradise." },

  
  // Europe
  { name: "London, UK", country: Country.UnitedKingdom, position: [51.505, -0.09], description: "A classic highlight!" },
  { name: "Edinburgh, Scotland", country: Country.UnitedKingdom, position: [55.95, -3.19], description: "Castles, cobblestones, and festivals." },
  { name: "Brussels, Belgium", country: Country.Belgium, position: [50.85, 4.35], description: "Waffles, EU HQ, and medieval charm." },
  { name: "Copenhagen, Denmark", country: Country.Denmark, position: [55.68, 12.57], description: "Canals, bikes, and hygge." },
  { name: "Cologne, Germany", country: Country.Germany, position: [50.94, 6.96], description: "Cathedral, chocolate, and Rhine River." },
  { name: "Paris, France", country: Country.France, position: [48.85, 2.35], description: "Eiffel Tower, the Sienne and pastries." },
  { name: "Luxembourg", country: Country.Luxembourg, position: [49.61, 6.13], description: "Castles, forests, and European charm." },
  { name: "Berlin, Germany", country: Country.Germany, position: [52.52, 13.40], description: "History, culture, and vibrant nightlife." },
  { name: "Neuschwanstein Castle, Germany", country: Country.Germany, position: [47.55, 10.75], description: "Fairy-tale castle in the Bavarian Alps." },
  { name: "Lisbon, Portugal", country: Country.Portugal, position: [38.72, -9.14], description: "Hills, trams, and pastel de nata." },
  { name: "Rome, Italy", country: Country.Italy, position: [41.90, 12.49], description: "Colosseum, Vatican, and Renaissance art." },
  { name: "Amsterdam, Netherlands", country: Country.Netherlands, position: [52.37, 4.90], description: "Canals, museums, and the red light district." },
  { name: "Rotterdam, Netherlands", country: Country.Netherlands, position: [51.92, 4.48], description: "Windmills, clogs and tulips." },
  { name: "Barcelona, Spain", country: Country.Spain, position: [41.38, 2.17], description: "Gaudi architecture, tapas, and beaches." },
  
  // Asia
  { name: "Tokyo, Japan", country: Country.Japan, position: [35.6762, 139.6503], description: "Sushi, neon lights, and shrines." },
  { name: "Osaka, Japan", country: Country.Japan, position: [34.69, 135.50], description: "Street food, culture, and nightlife." },
  { name: "Philippines", country: Country.Philippines, position: [13.41, 122.56], description: "Islands, beaches, and culture." },
  { name: "Vietnam", country: Country.Vietnam, position: [14.06, 108.28], description: "Pho, history, and beautiful landscapes." },
  { name: "Cambodia", country: Country.Cambodia, position: [12.57, 104.99], description: "Temples of Angkor and rich history." },
  { name: "Singapore", country: Country.Singapore, position: [1.35, 103.82], description: "Futuristic city meets cultural heritage." },
  { name: "Malaysia", country: Country.Malaysia, position: [4.21, 101.97], description: "Rainforests, food, and diverse cities." },

  // Africa
  { name: "Egypt", country: Country.Egypt, position: [26.82, 30.80], description: "Pyramids, Nile River, and ancient wonders." },
  { name: "Jordan", country: Country.Jordan, position: [31.24, 36.51], description: "Petra, deserts, and warm hospitality." },
  { name: "Dubai, UAE", country: Country.UnitedArabEmirates, position: [25.20, 55.27], description: "Skyscrapers, luxury, and desert adventures." },

  // North America
  { name: "Canada", country: Country.Canada, position: [56.13, -106.35], description: "Mountains, lakes, and maple syrup." },
  { name: "USA", country: Country.UnitedStates, position: [37.09, -95.71], description: "National parks, cities, and culture." },
  { name: "Mexico", country: Country.Mexico, position: [23.63, -102.55], description: "Tacos, ruins, and vibrant traditions." },
  { name: "Guatemala", country: Country.Guatemala, position: [15.78, -90.23], description: "Volcanoes, Mayan ruins, and lakes." },
  { name: "Belize", country: Country.Belize, position: [17.19, -88.50], description: "Barrier reef, jungle, and blue waters." },
  
  // South America
  { name: "Peru", country: Country.Peru, position: [-9.19, -75.02], description: "Machu Picchu, Andes, and rich history." },
]
