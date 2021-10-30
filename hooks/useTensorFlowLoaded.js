import * as tf from '@tensorflow/tfjs'
import React from 'react'

export default function useTensorFlowLoaded() {
   const [isLoaded, setLoaded] = React.useState(false)
   React.useEffect(() => {
      let isMounted = true
      tf.ready().then(() => {
         if (isMounted) {
            setLoaded(true)
         }
      })
      return () => (isMounted = false)
   }, [])
   return isLoaded
}
