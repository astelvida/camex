/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from 'react'
import {
   Text as DefaultText,
   useColorScheme,
   View as DefaultView,
} from 'react-native'
import Themes from '../constants/Themes'

export function useThemeColor(props, colorName) {
   const theme = useColorScheme()
   return props[theme] || Themes[theme][colorName]
}

export function Text(props) {
   const { style, lightColor, darkColor, ...otherProps } = props
   const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')
   return <DefaultText style={[{ color }, style]} {...otherProps} />
}

export function View(props) {
   const { style, lightColor, darkColor, ...otherProps } = props
   const backgroundColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      'background'
   )

   return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}
