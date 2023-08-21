import React, {useState} from "react";
import './App.css'
import axios from 'axios';
export function Details(props) {
 const [formData, setFormData] = useState({
    name: '',
    mname:'',
    lname: '',
    email: '',
    age: '',
    eth:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
// export const Details=() =>{
//     const [email, setEmail]=useState("");
//     const [name,setName]=useState("");
//     const [mname,setMname]=useState("");
//     const [lname,setLname]=useState("");
//     const [eth,setEth]=useState("");
//     const [age,setAge]=useState("");
//     <input type="text" placeholder="Hispanic" name="eth" id="eth" value={eth} onChange={(e) => setEth(e.target.value)}></input>
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);
    
        try {
          const response = await axios.post('https://eo2mfkj34y82jkj.m.pipedream.net', jsonData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          console.log('API Response:', response.data);
          // Handle the response as needed
          setFormData({
            name: '',
            mname:'',
            lname: '',
            email: '',
            age: '',
            eth:''
          });
        } catch (error) {
          console.error('API Error:', error);
          // Handle the error
        }
      };
    return(
        <><div><h1>Details</h1></div><><form className="detailsForm" onSubmit={handleSubmit}>
            <label for="email">Email *</label>
            <input required type="email" placeholder="youremail@example.com" name="email" id="email" value={formData.email} onChange={handleChange}></input>
            <label for="Name">First Name *</label>
            <input required type="text" placeholder="First Name" name="name" id="name" value={formData.name} onChange={handleChange}></input>
            <label for="mname">Middle Name</label>
            <input type="text" placeholder="Middle Name" name="mname" id="mname" value={formData.mname} onChange={handleChange}></input>
            <label for="lname">Last Name *</label>
            <input required type="text" placeholder="Last Name" name="lname" id="lname" value={formData.lname} onChange={handleChange}></input>
            <label required for="age">Age *</label>
            <input type="text" placeholder="18" name="age" id="age" value={formData.age} onChange={handleChange}></input>
            <label for="eth">Ethinicity *</label>
            <input required type="text" placeholder="Hispanic" name="eth" id="eth" value={formData.eth} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form><button onClick={() => props.onFormSwitch('getdeets')}>Get Pateint Details</button></></>
        
    ) 
 }
