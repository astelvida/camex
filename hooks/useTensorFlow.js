import React from 'react'
import LoadingView from '../components/LoadingView'
import * as mobilenet from '@tensorflow-models/mobilenet'
import { optionsV1 } from '../constants/Config'
import * as tf from '@tensorflow/tfjs'

const ModelContext = React.createContext(null)

const modelKey =  '@model'
const cache = {}

export function ModelProvider(props) {
   const [model, setModel] = React.useState(cache[modelKey])
   const [predictions, setPredictions] = React.useState([])
   const isMounted = React.useRef(true)

   React.useEffect(() => {
      isMounted.current = true
      return () => (isMounted.current = false)
   }, [])
 
   React.useEffect(() => {
      if (cache[modelKey]) {
         return
      }
      mobilenet.load(optionsV1).then((model) => {
         if (isMounted.current) {
            setModel(model)
            cache[modelKey] = model
         }
      })
   }, [])
   
   const value = React.useMemo(() => ({ model, predictions, setPredictions }), [model, predictions])

   return (
      <ModelContext.Provider value={value}>
         {model ? props.children : <LoadingView>Loading Model...</LoadingView> }
      </ModelContext.Provider>
   )
}

export function useModel() {
   const context = React.useContext(ModelContext)
   if (!context) {
      throw new Error('useModel must be used within the ModelProvider')
   }
   return context
}

export function useTfLoaded() {
   const [isReady, setReady] = React.useState(false)
   React.useEffect(() => {
      let isMounted = true
      tf.ready().then(() => {
         if (isMounted) {
            setReady(true)
         }
      })
      return () => (isMounted = false)
   }, [])
   return isReady
}
