var Express = require("express");
var Mongoclient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");
const { get } = require("mongoose");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://manoharshirsat17:Madhurohini3103@cluster0.3mmv1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATABASENAME="todoappdb";
var database;

app.listen(5038,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongo DB Connection Successful");
    });
})

app.get('/api/todoapp/GetNotes',(request,response)=>{
    database.collection("ToDoList").find({}).toArray((error,result)=>{
        response.send(result);
    });
})