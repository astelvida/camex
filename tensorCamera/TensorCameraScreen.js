import React from 'react'
import { Platform, View, StyleSheet, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import TensorCamera from './TensorCamera'
import PredictionsList from './PredictionsList'
import CameraPermissionsWrapper from './CameraPermissionsWrapper'
import { ModelProvider } from '../hooks/useTensorFlow'
import Layout from '../constants/Layout'
import AntDesign from '@expo/vector-icons/AntDesign'

let c = 0

export default function TensorCameraScreen({ navigation, route }) {

   React.useEffect(() => {
      console.log(`MOUNTED #${++c}`)
   }, [])

   const close = (e) => {
      e.preventDefault()
      navigation.canGoBack() && route.key !== 'blank' 
         ? navigation.goBack() 
         : navigation.navigate('Home', { screen: 'Settings' })
   }

   return (
      <CameraPermissionsWrapper>
         <ModelProvider>
            <View style={styles.container}>
               <PredictionsList />
               <CloseButton onPress={close} />
               <View style={styles.cameraContainer}>
                  <TensorCamera />
               </View>
               <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            </View>
         </ModelProvider>
      </CameraPermissionsWrapper>
   )
}


function CloseButton ({onPress})  {
   return (
      <TouchableOpacity
         onPress={onPress}
         style={[styles.ctrlButton, { top: Layout.marginS, left: Layout.marginS }]}
      >
         <AntDesign name="close" size={30} color="black" />
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
   },
   cameraContainer: {
      borderRadius: 15,
      overflow: 'hidden',
   },
   ctrlButton: {
      zIndex: 120,
      position: 'absolute',
      padding: 8,
      borderRadius: (30 + 8) / 2,
      alignItems: 'center',
      backgroundColor: '#fafa77',
      // bottom: Layout.marginS,
      // right: Layout.marginS,
   }
})



// function useCameraType() {
//    const [type, setType] = React.useState(Camera.Constants.Type.back)
//    const toggleType = () => {
//       setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
//    }
//    return [type, toggleType]
// }

// const FlipButton = ({ onPress }) => (
//    <TouchableOpacity
//       onPress={onPress}
//       style={[styles.ctrlButton, { bottom: Layout.marginS, right: Layout.marginS }]}
//    >
//       <AntDesign name="sync" size={30} color="black" />
//    </TouchableOpacity>
// )