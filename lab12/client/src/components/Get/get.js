import {React, useState} from 'react';
import Axios from 'axios';

function Get(){
const [ISBN,setISBN] = useState("");


function getBook(){
Axios.get("http://localhost:45030/books/"+ISBN)
.then(response =>{
    console.log(response.data);
    alert("Success!");
})
.catch(error=> {
    console.log("Error" +error);
})
}
return <div>
    <input value={ISBN} onChange ={(event)=>{setISBN(event.target.value)}} placeholder = "Enter the ISBN"/>
    
<button onClick={()=>{getBook()}}>Click to find book</button>
</div>
}

export default Get; 