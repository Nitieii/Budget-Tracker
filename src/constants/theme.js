import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#FF3378',
  secondary: '#33c9FF',
  optional: '#41E94B',

  // colors
  black: '#000000',
  white: '#ffffff',
  lightGray: '#cbced5',
  lightGray2: '#f5f7f9',
  lightGray3: '#f6f6f6',
  gray: '#6a6a6a',
  blue: '#42b0ff',
  darkgray: '#898c95',
  yellow: '#FFD573',
  lightBlue: '#95a9b8',
  lightGreen: '#27ae60',
  peach: '#ff9f43',
  purple: '#a55eea',
  red: '#ca3636',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'GTWalsheimPro-Bold',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'GTWalsheimPro-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'GTWalsheimPro-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'GTWalsheimPro-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'GTWalsheimPro-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {
    fontFamily: 'GTWalsheimPro-Medium',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'GTWalsheimPro-Medium',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'GTWalsheimPro-Medium',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'GTWalsheimPro-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'GTWalsheimPro-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
