import React from "react";
import ReactCounter from './components/CounterOne'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import {Route, Routes, BrowserRouter } from 'react-router-dom';
import {  BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
    <Router>
      
      <Routes>
      <Route path="/" element={<ReactCounter/>}>
     </Route> 
      <Route path="*" element={<PageNotFound/>}/> 
     </Routes>
    </Router>
    </ErrorBoundary>
  )
}

export default App;
