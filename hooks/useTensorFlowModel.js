import React from 'react'
import * as tf from '@tensorflow/tfjs'

const options =  { version: 1, alpha: 0.25 }

function useTensorFlowModel(modelKind) {
   const [model, setModel] = React.useState(null)
   const isMounted = React.useRef(true) 
   
   React.useEffect(() => {
      isMounted.current = true
      return () => (isMounted.current = false)
   }, [])

   const loadModel= React.useCallback(() => {
      console.warn('loadModel...')
      setModel(null)
      modelKind.load(options).then((_model) => {
         if (isMounted.current) {
            setModel(_model)
         }
      })
   }, [modelKind])
 
   React.useEffect(() => {
      loadModel()
   }, [loadModel])

 
   return model
}



export default useTensorFlowModel