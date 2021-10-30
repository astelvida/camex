import React from 'react'
import {
   StyleSheet,
   Text,
   Image,
   useWindowDimensions,
   View,
} from 'react-native'
import Colors from '../constants/Colors'

const OnboardingStep = ({ item }) => {
   const { width, height } = useWindowDimensions()

   return (
      <View style={[styles.container, { width }]}>
         {item.image ? (
            <Image
               source={item.image}
               style={[styles.image, { width, resizeMode: 'contain' }]}
            />
         ) : null}
         <View style={{ flex: 0.3 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
         </View>
      </View>
   )
}

export default OnboardingStep

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   image: {
      flex: 0.7,
      justifyContent: 'center',
   },
   title: {
      fontWeight: '800',
      fontSize: 28,
      color: Colors.pink,
      textAlign: 'center',
      marginBottom: 10,
   },
   description: {
      fontWeight: '300',
      paddingHorizontal: 30,
      color: Colors.magnesium,
      fontSize: 16,
      textAlign: 'center',
   },
})
