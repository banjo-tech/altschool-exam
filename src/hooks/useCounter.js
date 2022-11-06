import React from "react"
const startingState = { count: 0 }
const reducerAction ={
    increment: "increment",
    decrement: "decrement",
    reset: "reset",
    setValue: "setValue"
}
const reducerCounter = (state, action) => {
  switch (action.type) {
    case reducerAction.increment:
      return { count: state.count + 1 }
    case reducerAction.decrement:
      return { count: state.count !== 0 ? state.count - 1 : (state.count = 0) }
      case reducerAction.reset:
      return { count:state.count = 0 }
    default:
      throw new Error('Error occured in counter')
  }
}

export default function useCounter(){
  const [state, dispatch] = React.useReducer(reducerCounter, startingState)
const incrementCounter =() => dispatch({ type: reducerAction.increment })
const decrementCounter =() => dispatch({ type: reducerAction.decrement })
const resetCounter =() => dispatch({ type: reducerAction.reset })
const setValue =(payload) => dispatch ({type: reducerAction.setValue, payload: payload})
return {
    incrementCounter,decrementCounter, resetCounter, setValue,state
}

}