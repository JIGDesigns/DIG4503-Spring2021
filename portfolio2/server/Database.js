import MongoClient from 'mongodb'; 
const URL = "mongodb+srv://IlliasAskew:cjHnImCFw9EKcA28@cluster0.yuzwq.mongodb.net";

class Database{

    constructor(){
        this.connection = null;
        this.database = null;
        this.collection = null;
    }
    
    async connect(){
        this.connection = await MongoClient.connect(URL, {useUnifiedTopology: true})
        this.database = this.connection.db("lab11");
        this.collection = this.database.collection("books");
    }
     createOne(ISBN,query){
        var result = this.collection.insertOne({
            "ISBN": ISBN,
            "title": query.title,
            "author": query.author,
            "description": query.description
        });
        return result;
    
    }
    close(){
    this.connection.close();
    }
     readOne(ISBN){
        var result = this.collection.findOne({
            "ISBN": ISBN,
        })
        return result;
    }
    
    readMany(query){
        var result = this.collection.find(
            {"title":query.title,
            "author":query.author}
        );
        return result; 
    }
    titleSearch(query){
        var result = this.collection.find(
            { "title": new RegExp(query,'i') }

        );
        return result; 
    }
    updateOne(ISBN, query){
       var result = this.collection.updateOne({"ISBN":ISBN},{$set:query});
       return result; 
    }
    deleteOne(ISBN){
       var result = this.collection.deleteOne({"ISBN":ISBN});
       return result;
    }


}
export default Database;