import * as React from 'react'
import * as Themed from './Themed'

export function MonoText(props) {
   return (
      <Themed.Text
         {...props}
         style={[props.style, { fontFamily: 'space-mono' }]}
      />
   )
}
