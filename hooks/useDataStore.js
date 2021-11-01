import React from 'react'

const cache = {}

const initialDataStoreState = { 
   data: null, 
   isLoading: null,
   error: false,
}

function dataStoreReducer(state, action) {
   switch (action.type) {
   case 'FETCH_DATA_START':
      return { ...state, isLoading: true, error: false }
   case 'FETCH_DATA_SUCCESS':
      return {  ...state, isLoading: false, error: false, data: action.data }
   case 'FETCH_DATA_ERROR':
      return { isLoading: false, error: action.error?.message || 'Fetch Data UNKNOWN ERROR', data: null }
   default:
      throw new Error(`Unhandled action type: ${action.type}`)
   }
}

export function useDataStore(key = 'latest') {
   const [state, dispatch] = React.useReducer(dataStoreReducer, {...initialDataStoreState, data: cache[key]})
   const {data, isLoading, error} = state
   
   const mounted = React.useRef(false)

   const run = React.useCallback((resolvePromise) => {
      mounted.current = true;
      dispatch({type: 'FETCH_DATA_START' })
      resolvePromise()
         .then((data) => {
            if (mounted.current) {
               dispatch({ type: 'FETCH_DATA_SUCCESS', data })
               cache[key] = data
               console.log('FETCHED')
            }
         }).catch((error) => {
            dispatch({ type: 'FETCH_DATA_ERROR', error })
         })
      
      return () => {
         mounted.current = false
      }
   }, [dispatch, key])

   return  [{data, isLoading, error}, run]
}