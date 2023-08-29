var express = require("express");
var  mongoClient= require('mongodb').MongoClient;
var port = 9000;
var connectionString= 'mongodb://localhost:27017'; 
var client = mongoClient(connectionString, { err, client});


var app = express();

app.use(cors());
app.use(express.urlencoded({
    extended:true                   
}));


 function Connecttodatabase() {
    try {
         client.connect();
         console.log('Connected to MongoDB');
    } 
    catch (error) {
        console.error('server not connecting to MongoDB:');
    }
}
Connecttodatabase();

app.use(express.json());


app.listen(port, () => {
    console.log("server runig on 7000");
});

app.get('/tasks',  (req, res) => {
    var db = client.db("task");
    const tasks = db.collection('mytasks').find({}).toArray();
    res.json(tasks);
});


app.put('/tasks/:id',  (req, res) => {
    const db = client.db("task");
    const taskId = req.params.id;
    var updatedTask = req.body;

    try {
        db.collection('mytasks').updateOne({ id: ObjectId(taskId) }, { $set: updatedTask });
        res.send('Task updated successfully');
    } catch (error) {
        res.send('Error updating task');
    }
});


app.delete('/tasks/:id',  (req, res) => {
    var db = client.db();
    var taskId = req.params.id;

    try {
        db.collection('mytasks').deleteOne({ id: ObjectId(taskId) });
        res.send('Task deleted successfully');
    } catch (error) {
        res.send('Error deleting task');
    }
});