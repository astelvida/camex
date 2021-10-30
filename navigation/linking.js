/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking'

const linking = {
   prefixes: [Linking.createURL('/')],
   config: {
      screens: {
         Root: {
            screens: {
               TensorCamera: {
                  screens: {
                     TensorCameraScreen: 'tensorCamera',
                  },
               },
               TabOne: {
                  screens: {
                     TabOneScreen: 'one',
                  },
               },
               TabTwo: {
                  screens: {
                     TabTwoScreen: 'two',
                  },
               },
            },
         },
         Modal: 'modal',
         NotFound: '*',
      },
   },
}

export default linking
