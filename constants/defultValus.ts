import { Dimensions } from 'react-native';

export const mainPageBorderRadius = 22;
export const screenWidth = Dimensions.get('window').width;

export const COLORS = {
  primary: "#b22222",
  cardBlue: "rgba(105,131,246,0.6)",
  beanPink: "#e0808fff",
  buttonBg: "#0a8a2a",
};


export const beanList = [
    { id: 'b01', name: 'El Paraiso', roastery: 'La Finca', land: 'Guatemala', kgPrice: 51.96 },
    { id: 'b02', name: 'Santa Maria', roastery: 'Cafe Norte', land: 'Colombia', kgPrice: 46.00 },
    { id: 'b03', name: 'Yirgacheffe Select', roastery: 'Addis Beans', land: 'Ethiopia', kgPrice: 58.50 },
    { id: 'b04', name: 'Nyeri AA', roastery: 'Kenya Hill', land: 'Kenya', kgPrice: 55.25 },
    { id: 'b05', name: 'Santos Dulce', roastery: 'Rio Roast', land: 'Brazil', kgPrice: 40.00 },
    { id: 'b06', name: 'Tarrazu Gold', roastery: 'Costa Roast', land: 'Costa Rica', kgPrice: 48.30 },
    { id: 'b07', name: 'Mandheling Dark', roastery: 'Sumatra Roast', land: 'Indonesia', kgPrice: 43.10 },
    { id: 'b08', name: 'Copan Peak', roastery: 'Hondura Blend', land: 'Honduras', kgPrice: 45.75 },
    { id: 'b09', name: 'Andes Single', roastery: 'Andean Roast', land: 'Peru', kgPrice: 42.00 },
    { id: 'b10', name: 'Kigali Bloom', roastery: 'Rwanda Rise', land: 'Rwanda', kgPrice: 57.00 },
  ];

// coffee color palette used across the app
export const COFFEE_COLORS = {
  espresso:      "#2B1700", 
  frenchRoast:   "#3B1F0B",
  darkRoast:     "#4E2A14",
  moka:          "#5C391A",
  chocolate:     "#3D1F1F",
  mediumRoast:   "#8B5A3C",
  cityRoast:     "#A16F4A",
  lightRoast:    "#B88759",
  caramel:       "#C78F5A",
  toffee:        "#D4A373",
  crema:         "#E9D5B3",
  coffeeBeige:   "#E3D0B8",
  milk:          "#F3E6D8",
  amber:         "#D97706",
  sunnyHoney:    "#FFD89B", 
  latteFoam:     "#FFF2E6", 
  peachCream:    "#FFD6C2", 
  warmSand:      "#E9C7A8", 
  caramelGlow:   "#F2B77A", 
  vanillaCream:  "#F8E8D4", 
  icedCoffee:    "#DCC2A6", 
  honeyBrown:    "#E6B683", 
  cappuccino:    "#D9C2A3", 
  cinnamon:      "#C58C5C", 
  biscuit:       "#EBD7C1", 
  softMocha:     "#CFAF91", 
  oatMilk:       "#EFE7DA", 
  hazelnut:      "#BF9466", 
  mapleSyrup:    "#D89B5E", 
  sunriseLatte:  "#F2C89B", 
  red:           '#402723ff',
  warmLatteRose: "F5D3CC",
  nr2:           '#e0aa74ff',
  nr3:           '#dea873ff',
  nr4:           '#e5a56cff' ,
};


export default {
  mainPageBorderRadius,
  screenWidth,
  COLORS,
  COFFEE_COLORS,
};
