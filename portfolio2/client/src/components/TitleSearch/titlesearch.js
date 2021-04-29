import {React, useState} from 'react';
import Axios from 'axios';

function TitleSearch(){
const [value,setValue] = useState("");


function searchbyTitle(){
Axios.get("http://localhost:45030/books/search/"+value)
.then(response =>{
    console.log(response.data);
    alert("Success!");
})
.catch(error=> {
    console.log("Error" +error);
})
}
return <div>
    <input value={value} onChange ={(event)=>{setValue(event.target.value)}} placeholder = "Search title by substring"/>
    
<button onClick={()=>{searchbyTitle()}}>Click to search by substring</button>
</div>
}

export default TitleSearch; 