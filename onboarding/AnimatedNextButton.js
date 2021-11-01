import React, { useEffect, useRef } from 'react'
import {
   Animated,
   StyleSheet,
   TouchableOpacity,
   View,
} from 'react-native'
import Svg, { Circle, G } from 'react-native-svg'
import Colors from '../constants/Colors'
import { AntDesign } from '@expo/vector-icons'

const AnimatedNextButton = ({ percentage, onPress }) => {
   const size = 128
   const strokeWidth = 2
   const center = size / 2
   const radius = size / 2 - strokeWidth / 2
   const circumference = 2 * Math.PI * radius

   const progressAnimationRef = useRef(new Animated.Value(0))
   const progressRef = useRef(null)

   const animate = (toValue) =>
      Animated.timing(progressAnimationRef.current, {
         toValue,
         duration: 250,
         useNativeDriver: true,
      }).start()

   useEffect(() => {
      animate(percentage)
   }, [percentage])

   useEffect(() => {
      const progressAnimation = progressAnimationRef.current
      const listenerId = progressAnimation.addListener((e) => {
         if (progressRef?.current) {
            progressRef.current.setNativeProps({
               strokeDashoffset:
                        circumference - (circumference * e.value) / 100,
            })
         }
      })
      return () => {
         progressAnimation.removeListener(listenerId)
      }
   }, [])

   return (
      <View style={styles.container}>
         <Svg height={size} width={size}>
            <G rotation="-90" origin={center}>
               <Circle
                  cx={center}
                  cy={center}
                  r={radius}
                  stroke={Colors.timberwolf}
                  strokeWidth={strokeWidth}
               />
               <Circle
                  ref={progressRef}
                  cx={center}
                  cy={center}
                  r={radius}
                  stroke={Colors.pink}
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
               />
            </G>
         </Svg>
         <TouchableOpacity onPress={onPress} style={styles.button}>
            <AntDesign name="arrowright" size={36} color={Colors.white} />
         </TouchableOpacity>
      </View>
   )
}

export default AnimatedNextButton

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   button: {
      position: 'absolute',
      backgroundColor: Colors.pink,
      borderRadius: 100,
      padding: 20,
   },
})
