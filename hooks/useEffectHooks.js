import React from 'react'

export function useEffectOnlyOnUpdate (callback, deps) {
   const didMount = React.useRef(false)
   React.useEffect(() => {
      if (didMount.current) {
         callback(deps)
      } else {
         didMount.current = true
      }
   }, [callback, deps])
}
 
 
export const useEffectOnlyOnce = (callback, dependencies, condition) => {
   const calledOnce = React.useRef(false)
  
   React.useEffect(() => {
      if (calledOnce.current) {
         return
      }
  
      if (condition(dependencies)) {
         callback(dependencies)
  
         calledOnce.current = true
      }
   }, [callback, condition, dependencies])
}