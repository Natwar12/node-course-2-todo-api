// const MongoCLient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('MyTodos').findOneAndUpdate({
        _id: new ObjectID('5c1ccd345de0f373c86a4de3')
    }, {
        $set: {
            name: 'akash'
         }
}, {
        returnOriginal:false
    }).then((result) =>{
        console.log(result);
    });
      });
    
    