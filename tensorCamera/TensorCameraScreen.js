import React from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import TensorCamera from './TensorCamera'
import PredictionsList from './PredictionsList'
import CameraPermissionsWrapper from './CameraPermissionsWrapper'
import LoadingView from '../components/LoadingView'
import useTensorFlowLoaded from '../hooks/useTensorFlowLoaded'
import useTensorFlowModel from '../hooks/useTensorFlowModel'
import Layout from '../constants/Layout'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Camera } from 'expo-camera'

const FlipButton = ({ onPress }) => (
   <TouchableOpacity
      onPress={onPress}
      style={[styles.ctrlButton, { bottom: Layout.marginM, right: Layout.marginM }]}
   >
      <AntDesign name="sync" size={30} color="black" />
   </TouchableOpacity>
)

const CloseButton = ({ onPress }) => (
   <TouchableOpacity
      onPress={onPress}
      style={[styles.ctrlButton, { top: Layout.marginM, left: Layout.marginM }]}
   >
      <AntDesign name="close" size={30} color="black" />
   </TouchableOpacity>
)

let c = 0
const options = { version: 1, alpha: 0.25 }

export default function TensorCameraScreen({ navigation, route }) {
   const [predictions, setPredictions] = React.useState([])
   const [type, setType] = React.useState(Camera.Constants.Type.back)
   
   const model = useTensorFlowModel(mobilenet)

   React.useEffect(() => {
      console.log(`MOUNTED #${++c}`)
   }, [])

   function toggleType() {
      setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
   }


   if (!model) {
      return <LoadingView>Loading TensorFlow MODEL</LoadingView>
   }

   return (
      <CameraPermissionsWrapper>
         <View style={styles.container}>
            <PredictionsList predictions={predictions} />
            <FlipButton onPress={toggleType} />
            <CloseButton
               onPress={() => {
                  navigation.canGoBack() ?  navigation.goBack() : navigation.navigate('Home')
               }}
            />
            <View style={styles.cameraContainer}>
               <TensorCamera type={type} model={model} setPredictions={setPredictions} />
            </View>
         </View>
      </CameraPermissionsWrapper>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'black',
      position: 'relative'
      // justifyContent: 'center',
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
      // bottom: Layout.marginM,
      // right: Layout.marginM,
   }
})
