import React from 'react';
import { useState } from 'react';
function Name(){
    const [name, setName] = useState("N/A");
    return (<div>
       <input type="text" onChange={(event) => {
        setName(event.target.value);
      }} />
      {
        <p>Your Team Name: {name}</p>
      }
       </div>);
    
 }
 export default Name; 