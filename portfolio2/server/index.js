import Express, { response } from 'express';
import Database from './Database.js';
import CORS from 'cors';



const App = Express();
const port = 45030;

App.use(Express.json());
App.use(CORS())

const myDB = new Database();

myDB.connect()

App.put("/books/:ISBN", (req, res) => {
    console.log("/books/:ISBN");
    const ISBN = req.params.ISBN;
    const body = req.body;
   const response = myDB.createOne(ISBN,body);
    response.then((data)=> res.json({"book":data}))
  
   
});
App.get("/books/:ISBN", (req, res) => {
    console.log("/books/:ISBN");
    const ISBN = req.params.ISBN;
   const response = (myDB.readOne(ISBN));
   
response.then((data)=>{
    if (data == null){
        data = "not found"
    };
    const resp = {"book": data};
res.json(resp);})
});

App.get("/books/search/:query", (req, res) => {
    console.log("/books/search/:query");
    const query = req.params.query;
    var response = myDB.titleSearch(query);
     response = response.toArray();
    response.then((data)=>{
     if (data == null){
         data = []
     };
     const resp = {"book": data};
 res.json(resp);})

    

});
App.post("/books/search", (req, res) => {
    console.log("/books/search");
    const body = req.body;
   var response = myDB.readMany(body);
    response = response.toArray();
   response.then((data)=>{
    if (data == null){
        data = []
    };
    const resp = {"book": data};
res.json(resp);})
});
App.patch("/books/:ISBN", (req, res) => {
    console.log("/books/:ISBN");
    const ISBN = req.params.ISBN;
    const body = req.body;
   const response = myDB.updateOne(ISBN,body);
    response.then((data)=> res.json(body))
  
   
});
App.delete("/books/:ISBN", (req, res) => {
    console.log("/books/:ISBN");
    const ISBN = req.params.ISBN;
   const response = myDB.deleteOne(ISBN);
    response.then((data)=> res.json({"count":data.deletedCount}))
  
   
});


App.listen(port, function(){
    console.log("Server is running!");
});