import {React, useState} from 'react';
import Axios from 'axios';

function Search(){
const [query,setQuery] = useState("");

function searchName(){
Axios.get("http://localhost:45030/search/"+query)
.then(response =>{
    console.log(response.data);
    alert("Success!");
})
.catch(error=> {
    console.log("Error" +error);
})
}
return <div>
    <input value={query} onChange ={(event)=>{setQuery(event.target.value)}}
    placeholder = "Enter Search Query"/>
<button onClick={()=>{searchName()}}>Search Name</button>
</div>
}

export default Search; 