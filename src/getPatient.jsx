import React, {useState} from "react";
import axios from 'axios';
import './App.css'
import { Link } from 'react-router-dom';

export function GetPatient(props) {
    const [patientid,setID]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const jsonData = JSON.stringify(patientid);
        console.log(jsonData);

        try {
            const response = await axios.get('https://velocityclinicalstage.clinicalconductor.com/CCSWeb/api/v1/patients/371032', jsonData, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            console.log('API Response:', response.data);
            // Handle the response as needed
        
          } catch (error) {
            console.error('API Error:', error);
            // Handle the error
          }
    }
  return (
    <><div>
          <h1>Get Patient by ID</h1>

      </div>
      <form onSubmit={() => handleSubmit()} className="patientidForm">
        <label htmlFOR="patientid">Pateint ID</label>
        <input type="text" name="patientid" id="patientid" placeholder="1234" value={patientid} onChange={(e) => setID(e.target.value)} ></input>
      </form>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <button onClick={() => props.onFormSwitch('deets')}>Go to Form Page</button></>
  );
}
