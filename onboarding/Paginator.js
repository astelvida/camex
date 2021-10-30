import React from 'react'
import {StyleSheet, Animated, useWindowDimensions, View} from 'react-native'
import Colors from '../constants/Colors'

const Paginator = ({data, scrollX}) => {
   const {width: windowWidth} = useWindowDimensions()

   return (
      <View style={styles.container}>
         {data.map((_, i) => {
            const inputRange = [
               (i - 1) * windowWidth,
               (i + 0) * windowWidth,
               (i + 1) * windowWidth,
            ]
            const width = scrollX.interpolate({
               inputRange,
               outputRange: [10, 20, 10],
               extrapolate: 'clamp',
            })

            const opacity = scrollX.interpolate({
               inputRange,
               outputRange: [0.25, 1, 0.25],
               extrapolate: 'clamp',
            })

            return (
               <Animated.View
                  style={[styles.dot, {width, opacity}]}
                  key={i.toString()}
               />
            )
         })}
      </View>
   )
}

export default Paginator

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      height: 64,
   },
   dot: {
      height: 10,
      borderRadius: 5,
      backgroundColor: Colors.pink,
      marginHorizontal: 8,
   },
})
