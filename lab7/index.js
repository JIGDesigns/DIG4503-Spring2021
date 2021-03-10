import Express from 'express';

const App = Express();
const port = 45030;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.get("/", function(request, response){
    response.json("Hello World!");
});

App.get("/people/:person", function(request, response){
    var person = request.params.person
    var res = {name: "Not found"};
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        if (element == person){
            res = {name: "name"};
        }
        
    }
    console.log("Recieved a request!");
    response.json(res);
});

App.get("/search/:name", function(request, response){
    var query = request.params.name
    var res = {search: ["Not found"]};
    var results =[]
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        if (element.toLowerCase().includes(query.toLowerCase())){
            results.push(element)
        }
        
    } if(results.length>0){
        res = {search: results}
    }
    console.log("Recieved a request!");
    response.json(res);
});

App.listen(port, function(){
    console.log("Server is running!");
});