import {React, useState} from 'react';
import Axios from 'axios';

function Add(){
const [name,setName] = useState("");

function addName(){
Axios.put("http://localhost:45030/people/"+name)
.then(response =>{
    console.log(response.data);
    alert("Success!");
})
.catch(error=> {
    console.log("Error" +error);
})
}
return <div>
    <input value={name} onChange ={(event)=>{setName(event.target.value)}}
    placeholder = "Enter Name"/>
<button onClick={()=>{addName()}}>Add Name</button>
</div>
}

export default Add; 