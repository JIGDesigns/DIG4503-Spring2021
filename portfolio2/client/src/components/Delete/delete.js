import {React, useState} from 'react';
import Axios from 'axios';

function Delete(){
const [ISBN,setISBN] = useState("");


function deleteBook(){
Axios.delete("http://localhost:45030/books/"+ISBN)
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
    
<button onClick={()=>{deleteBook()}}>Click to delete book</button>
</div>
}

export default Delete; 