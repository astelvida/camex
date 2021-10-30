import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const base = 16

export default {
   window: {
      width,
      height,
   },
   base: base,
   marginXS: base, // 16
   marginS: base * 1.5, // 24
   marginM: base * 2, // 36
   marginL: base * 3, // 48
   marginXL: base * 4, // 64
   marginXXL: base * 5, // 80

   isSmallDevice: width < 375,
}

// function wp(percentage) {
//   const value = (percentage * width) / 100;
//   return Math.round(value);
// }

// const slideHeight = height * 0.36;
// const slideWidth = wp(75);
// const itemHorizontalMargin = wp(2);
// export const sliderWidth = width;
// export const itemWidth = slideWidth + itemHorizontalMargin * 2;
// const entryBorderRadius = 8;
