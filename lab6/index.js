import Express from 'express';

const App = Express();
const port = 45030;

const person ={
    name: "Illias",
    color: "Red"
};
App.get("/", function(request, response){
    response.json("Hello World!");
});

App.get("/person", function(request, response){
    console.log("Recieved a request!");
    response.json(person);
});

App.listen(port, function(){
    console.log("Server is running!");
});