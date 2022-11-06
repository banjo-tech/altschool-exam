import React, { useState} from 'react';
import useCounter from '../hooks/useCounter'
export default function ReactCounter() {

const {decrementCounter,incrementCounter,resetCounter, state} = useCounter() 
// const [inputValue, setValue] = useState("")
// const {incrementCounter, setValue} = useCounter()
  return (
    <div  className="container mt-3">
          
    <div>
      <h2 className="mb-4"> Counter </h2>
      {/* <form>
   <label>
   <h3 className="mb-4">  Enter a value:  </h3>
    <br></br>
    <input type="number" name="number" />
   </label>
  <input type="submit" value="Enter" />
</form> */}

<br></br>
      <div>
        <h2>{state.count}</h2>
        <div>
          {/* <label>Enter value</label>
          <input type = "number" onChange={(e) => setInputValue(e.target.value)}
          value = {inputValue}/>
          <button onClick={() =>{setValue(inputValue) ;setInputValue(0)}}
          > Set Value</button> */}
        </div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={decrementCounter}
        >
          decrement
        </button>
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={incrementCounter}
          >
          increment
        </button>

        <button
          type="button"
          className="btn btn-success ms-2"
          onClick={resetCounter}
          >
          Reset
        </button>
      </div>
    </div>
   
    </div>
  )
}