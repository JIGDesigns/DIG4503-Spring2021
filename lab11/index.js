import Express, { response } from 'express';
import MongoClient from 'mongodb'; 
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(Express.json());
var myDB = new Database();
myDB.connect()

App.put("/books/:ISBN", (req, res) => {
    console.log("/books/:ISBN");
    var ISBN = req.params.ISBN;
    var body = req.body;
   var response = myDB.createOne(ISBN,body);
    response.then((data)=> res.json({"book":data}))
  
   
});
App.get("/books/:ISBN", (req, res) => {
    console.log("/books/:ISBN");
    var ISBN = req.params.ISBN;
   var response = (myDB.readOne(ISBN));
   
response.then((data)=>{
    if (data == null){
        data = "not found"
    };
    var resp = {"book": data};
res.json(resp);})
    

});
App.post("/books/search", (req, res) => {
    console.log("/books/search");
    var body = req.body;
   var response = myDB.readMany(body);
   var response = response.toArray();
   response.then((data)=>{
    if (data == null){
        data = []
    };
    var resp = {"book": data};
res.json(resp);})
});
App.patch("/books/:ISBN", (req, res) => {
    console.log("/books/:ISBN");
    var ISBN = req.params.ISBN;
    var body = req.body;
   var response = myDB.updateOne(ISBN,body);
    response.then((data)=> res.json(body))
  
   
});
App.delete("/books/:ISBN", (req, res) => {
    console.log("/books/:ISBN");
    var ISBN = req.params.ISBN;
   var response = myDB.deleteOne(ISBN);
    response.then((data)=> res.json({"count":data.deletedCount}))
  
   
});


App.listen(port, function(){
    console.log("Server is running!");
});