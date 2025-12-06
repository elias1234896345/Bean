import { Dimensions } from 'react-native';

export const mainPageBorderRadius = 22;
export const screenWidth = Dimensions.get('window').width;

export const COLORS = {
  primary: "#b22222",
  cardBlue: "rgba(105,131,246,0.6)",
  beanPink: "#e0808fff",
  buttonBg: "#0a8a2a",
};

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
  red: '#402723ff',
  warmLatteRose: "F5D3CC",
  nr2: '#e0aa74ff',
  nr3:  '#dea873ff',
  nr4: '#e5a56cff' ,
};


export default {
  mainPageBorderRadius,
  screenWidth,
  COLORS,
  COFFEE_COLORS,
};
