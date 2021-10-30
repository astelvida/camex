import React from 'react'
import { View, Text } from 'react-native'
// import * as Themed from '../components/Themed'
import { Camera } from 'expo-camera'
import LoadingView from '../components/LoadingView'

const PermissionStatus = {
   GRANTED: 'granted',
   UNDETERMINED: 'undetermined',
   DENIED: 'denied',
}

export default function CameraPermissionsWrapper(props) {
   const [status, requestPermission] = Camera.useCameraPermissions()

   React.useEffect(() => {
      if (status === PermissionStatus.UNDETERMINED) {
         requestPermission()
      }
   }, [status, requestPermission])

   if (status === PermissionStatus.UNDETERMINED) {
      return (
         <LoadingView>Camera permission is required to continue</LoadingView>
      )
   }

   if (status === PermissionStatus.DENIED) {
      return (
         <View>
            <Text>No access to camera</Text>
         </View>
      )
   }

   return <View style={{flex: 1}}>{props.children}</View>
}
