import Express, { response } from 'express';
import MongoClient from 'mongodb'; 

const URL = "mongodb+srv://IlliasAskew:cjHnImCFw9EKcA28@cluster0.yuzwq.mongodb.net";

const App = Express();
const port = 45030;

class Database{

constructor(){
    this.connection = null;
    this.database = null;
    this.collection = null;
}

async connect(){
    this.connection = await MongoClient.connect(URL, {useUnifiedTopology: true})
    this.database = this.connection.db("lab10");
    this.collection = this.database.collection("people");
}
async createOne(firstName,lastName,favoriteColor){
    await this.collection.insertOne({
        "firstName": firstName,
        "lastName": lastName,
        "favoriteColor": favoriteColor
    });

}
close(){
this.connection.close();
}
 readOne(name){
    var result = this.collection.findOne({
        "firstName": name,
    })
return result;
}
}
App.use(Express.json());
var myDB = new Database();
myDB.connect()

App.put("/people/create", (req, res) => {
    console.log("/people/create");
    var body = req.body;
    myDB.createOne(body.firstName,body.lastName,body.favoriteColor);
    
  res.json({message:"sent"})
  
   
});
App.get("/people/:person", (req, response) => {
    console.log("/people/:person");
   var query = (myDB.readOne(req.params.person));
   
query.then((data)=>{
    if (data == null){
        data = "not found"
    };
    var res = {person: data};
response.json(res);})
    

});


App.listen(port, function(){
    console.log("Server is running!");
});