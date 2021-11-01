import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Layout from '../constants/Layout'
import { useModel } from '../hooks/useTensorFlow'

export default function PredictionsList() {
   const {predictions} = useModel()
   
   return (
      <View style={styles.container}>
         {predictions.map((p, i) => (
            <Text style={styles.text} key={`item-${i}`}>
               {p.className}
            </Text>
         ))}
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      zIndex: 100,
      position: 'absolute',
      bottom: Layout.marginXXL,
      left: Layout.marginM,
      right: Layout.marginM,
      backgroundColor: 'rgba(255,255,255,0.8)',
      padding: 8,
      borderRadius: 20,
      alignItems: 'center',
   },
   text: {
      paddingVertical: 2,
      fontSize: 20,
   },
})
