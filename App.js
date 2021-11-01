import React from 'react'
import { useColorScheme, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useTfLoaded } from './hooks/useTensorFlow'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation/Navigation'
import LoadingView from './components/LoadingView'

export default function App() {
   const isLoadingComplete = useCachedResources()
   const isTfReady = useTfLoaded()
   const colorScheme = useColorScheme()

   if (!isTfReady || !isLoadingComplete) {
      const messages = []
      !isLoadingComplete && messages.push('Loading App Resources...')
      !isTfReady && messages.push('Loading TensorFlow..')
      return <LoadingView>{messages.join('\n')} </LoadingView> 
   }
   
   return (
      <SafeAreaProvider>
         {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
         <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
   )
}