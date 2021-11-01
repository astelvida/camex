import React from 'react'
import { cameraWithTensors } from '@tensorflow/tfjs-react-native'
import { Camera } from 'expo-camera'
import { useWindowDimensions } from 'react-native'
import { useModelPredictions, useModel } from '../hooks/useTensorFlow'


export function TensorCamera() {
   const { width } = useWindowDimensions()
   const {model, setPredictions} = useModel()
   const raf = React.useRef(null)

   React.useEffect(() => {
      return () => {
         cancelAnimationFrame(raf.current)
      }
   }, [])

   const classify = React.useCallback((images) => {
      const loop = async () => {
         const nextImageTensor = images.next().value
         const preds = await model.classify(nextImageTensor)
         setPredictions(preds)
         raf.current = requestAnimationFrame(loop)
      }
      loop()
   }, [setPredictions])

   return React.useMemo(() => (
      <CustomTensorCamera
         type={Camera.Constants.Type.back} 
         width={width}
         onReady={classify}
         autorender={true}
      />
   ), [width, classify])
}
   

const TEXTURE_SIZE = { width: 1080, height: 1920 }
const TENSOR_WIDTH = 152
const CAMERA_RATIO = TEXTURE_SIZE.height / TEXTURE_SIZE.width
const TENSOR_SIZE = {
   width: TENSOR_WIDTH,
   height: TENSOR_WIDTH * CAMERA_RATIO,
}

const CameraWithTensors = cameraWithTensors(Camera)

function CustomTensorCamera({ width, ...props}) {   
   const sizeStyle = React.useMemo(() => {
      const ratio = width / TEXTURE_SIZE.width
      const cameraWidth = TEXTURE_SIZE.width * ratio
      const cameraHeight = TEXTURE_SIZE.height * ratio
      return {
         maxWidth: cameraWidth,
         minWidth: cameraWidth,
         maxHeight: cameraHeight,
         minHeight: cameraHeight,
         zIndex: 0
      }
   }, [width])
   
   return (
      <CameraWithTensors
         {...props}
         style={sizeStyle}
         cameraTextureWidth={TEXTURE_SIZE.width}
         cameraTextureHeight={TEXTURE_SIZE.height}
         resizeWidth={TENSOR_SIZE.width}
         resizeHeight={TENSOR_SIZE.height}
         resizeDepth={3}
         autorender={true}
      />
   )
}


export default TensorCamera
// export default React.memo(TensorCamera)