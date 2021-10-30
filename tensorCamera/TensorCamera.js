import React from 'react'
import { useWindowDimensions } from 'react-native'
import { cameraWithTensors } from '@tensorflow/tfjs-react-native'
import { Camera } from 'expo-camera'

const TEXTURE_SIZE = { width: 1080, height: 1920 }

const TENSOR_WIDTH = 152

const CAMERA_RATIO = TEXTURE_SIZE.height / TEXTURE_SIZE.width

const TENSOR_SIZE = {
   width: TENSOR_WIDTH,
   height: TENSOR_WIDTH * CAMERA_RATIO,
}

// "version": "detect",

const CameraWithTensors = cameraWithTensors(Camera)

export default function TensorCamera({ type, model, setPredictions, style, ...props }) {
   const dims = useWindowDimensions()
   const raf = React.useRef(null)

   React.useEffect(() => {
      return () => {
         cancelAnimationFrame(raf.current)
      }
   }, [])

   const predict = React.useCallback((images) => {
      const loop = async () => {
         const nextImageTensor = images.next().value
         const predictions = await model.classify(nextImageTensor)
         setPredictions(predictions)
         raf.current = requestAnimationFrame(loop)
      }
      loop()
   }, [model, setPredictions])

   const sizeStyle = React.useMemo(() => {
      const ratio = dims.width / TEXTURE_SIZE.width
      const cameraWidth = TEXTURE_SIZE.width * ratio
      const cameraHeight = TEXTURE_SIZE.height * ratio
      return {
         maxWidth: cameraWidth,
         minWidth: cameraWidth,
         maxHeight: cameraHeight,
         minHeight: cameraHeight,
         zIndex: 0,
      }
   }, [dims.width])

   return React.useMemo(
      () => (
         <CameraWithTensors
            {...props}
            type={type}
            width={dims.width}
            style={[style, sizeStyle]}
            cameraTextureWidth={TEXTURE_SIZE.width}
            cameraTextureHeight={TEXTURE_SIZE.height}
            resizeWidth={TENSOR_SIZE.width}
            resizeHeight={TENSOR_SIZE.height}
            resizeDepth={3}
            autorender={true}
            onReady={predict}
         />
      ),
      [dims.width, predict, props, sizeStyle, style, type]
   )
}
