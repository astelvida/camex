import * as React from 'react'

import { useColorScheme } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createStackNavigator } from '@react-navigation/stack'
// import { useFocusEffect } from '@react-navigation/core'
import { AntDesign } from '@expo/vector-icons'
import Themes from '../constants/Themes'
import NotFoundScreen from '../screens/NotFoundScreen'
import TabOneScreen from '../screens/TabOneScreen'
import OnboardingScreen from '../onboarding/OnboardingScreen'
import TensorCameraScreen from '../tensorCamera/TensorCameraScreen'

const Stack = createNativeStackNavigator()
// const Stack = createStackNavigator()

export default function Navigation({ colorScheme }) {
   return (
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
         <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Group screenOptions={{ headerShown : false }}>
               <Stack.Screen name="Home" component={HomeTabs} />
               <Stack.Screen name="NotFound" component={NotFoundScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
               <Stack.Screen name="TensorCamera" component={TensorCameraScreen} />
            </Stack.Group>
         </Stack.Navigator>
      </NavigationContainer>
   )
}


const Blank = ({ navigation, route }) => {

   React.useEffect(() => {
      console.warn(route)
      alert(' Navigated at Blank!')
      navigation.navigate('TensorCamera')
   }, [navigation])
   return null
}


const Tab = createBottomTabNavigator()
const HomeTabs = ({ navigation }) => {
   const colorScheme = useColorScheme()
   const { text: textColor, tint } = Themes[colorScheme]

   const routesToIconsMap = {
      Home: 'scan1',
      Camera: 'camerao',
      Blank: 'camerao',
      Settings: 'user',
      Scanner: 'qrcode',
   }

   
   const tabPress = (e) => {
      e.preventDefault()
      navigation.navigate('TensorCamera')
   }

   return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ size, color }) => (
               <AntDesign name={routesToIconsMap[route.name]} size={size} color={color} />
            ),
            tabBarActiveTintColor: tint,
         })}
      >
         <Tab.Screen name="Settings" component={OnboardingScreen} />
         <Tab.Screen name="Camera" component={Blank} listeners={{ tabPress }} />
         <Tab.Screen name="Scanner" component={TabOneScreen} />
      </Tab.Navigator>
   )
}

// // <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
// // <Stack.Group screenOptions={{ presentation: 'modal' }}>
// //     <Stack.Screen name="Modal" component={ModalScreen} />
// // </Stack.Group>
// options={({ navigation }) => ({
//   headerRight: (/* { tint, pressColor, pressOpacity } */) => (
//       <Pressable
//           onPress={() => navigation.navigate('Modal')}
//           style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
//       >
//           <AntDesign name="menu-fold" size={25} color={textColor} style={{ marginRight: 15 }} />
//       </Pressable>
//   ),
// })}