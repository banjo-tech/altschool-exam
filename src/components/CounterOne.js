import React, { useState} from 'react';
import useCounter from '../hooks/useCounter'
import{Container,Row, Col, Card} from "react-bootstrap"
export default function ReactCounter() {

const {decrementCounter,incrementCounter,resetCounter, setValue, state} = useCounter() 
const [inputValue, setInputValue] = useState("")
  return (
    <Container>
      <Row>
        <Col lg={6}>
     <Card  style = {{backgroundColor:"#CE93D8"}}className='mt-5'>
      <Card.Body>
        <Card.Title>
    <div  className="container mt-3">
          
    <div>
      <h2 className="mb-4"> Counter </h2>
     

<br></br>
      <div>
        <h2>{state.count}</h2>
        <div>
          <label>Enter value :</label>
          <br></br>
          <input type = "number" onChange={(e) => setInputValue(e.target.value)}
          value = {inputValue}/>
          <button onClick={() =>{setValue(inputValue)
           setInputValue(0)}}
          > Set Value</button>
        </div>
        <br></br>
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
    </Card.Title>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  )
}