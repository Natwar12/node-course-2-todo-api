// const MongoCLient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('MyTodos').deleteMany({name: 'Akash'}).then((result)=>{
    //       console.log(result);
    // });

    db.collection('MyTodos').deleteOne({name: 'Akash'}).then((result)=>{
        console.log('====================================================================');
        console.log(result);
    });

    // db.collection('MyTodos').findOneAndDelete({name: 'Akash'}).then((result)=>{
    //     console.log('====================================================================');     
    //     console.log(result);
    // });

    });
    
    