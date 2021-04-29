import {React, useState} from 'react';
import Axios from 'axios';

function Put(){
const [ISBN,setISBN] = useState("");
const [title,setTitle] = useState("");
const [author,setAuthor] = useState("");
const [description,setDescription] = useState("");

function addBook(){
Axios.put("http://localhost:45030/books/"+ISBN,
{
    title:title,
    author:author,
    description:description
})
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
    <input value={title} onChange ={(event)=>{setTitle(event.target.value)}} placeholder = "Enter the Title"/>
    <input value={author} onChange ={(event)=>{setAuthor(event.target.value)}} placeholder = "Enter the Author"/>
    <input value={description} onChange ={(event)=>{setDescription(event.target.value)}} placeholder = "Enter the Description"/>

<button onClick={()=>{addBook()}}>Click to add book</button>
</div>
}

export default Put; 