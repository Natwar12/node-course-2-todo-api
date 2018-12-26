// const MongoCLient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj= new ObjectID();
// console.log(obj);
// var user = {name:'akash', age: 22};

// var {name} = user;
// console.log(name);   {object destruction}

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
        
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.collection('MyTodos').insertOne({
        name: 'Akash',
        age: 21,
        location: 'Hyderabad'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert todo', err);
        }
        
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.close();
});