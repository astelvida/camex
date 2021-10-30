import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation/Navigation'
import useTensorFlowLoaded from './hooks/useTensorFlowLoaded'
import LoadingView from './components/LoadingView'

export default function App() {
   const isLoadingComplete = useCachedResources()
   const isTfReady = useTensorFlowLoaded()
   const colorScheme = useColorScheme()

   if (!isTfReady || !isLoadingComplete) {
      return (!isTfReady && !isLoadingComplete) 
         ? <LoadingView>Loading... </LoadingView> 
         : !isTfReady 
            ? <LoadingView>Loading TensorFlow</LoadingView> 
            : <LoadingView>Loading Resources</LoadingView>
   }
   
   return (
      <SafeAreaProvider>
         <StatusBar />
         <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
   )
   
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
})
