import React, {useState} from "react";
import './App.css'
import {Details} from "./details"
import { GetPatient } from './getPatient';
function App() {

  const [currentPage, setCurrentPage]=useState('deets');
  const togglePage= (pageName) =>{
    setCurrentPage(pageName);

  }

  return (
    <div className='App'>
      {currentPage === "deets" ? <Details onFormSwitch={togglePage} /> : <GetPatient onFormSwitch={togglePage} />}

    </div>
  );
}

export default App;
