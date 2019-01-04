const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);
    var realTodo= new Todo({
        text: req.body.text
    });

    realTodo.save().then((doc)=>{
            res.send(doc);
    }, (e)=>{
            res.send(e);
    });
});

app.post('/users',(req,res) => {
    var user1 = new User({
        Email: req.body.Email
    });

    user1.save().then((doc)=>{
           res.send(doc);
    }, (e)=>{
           res.send(e)
    });
});

app.get('/users', (req,res) => {
    User.find().then((Myusers) => {
        res.send({Myusers});
    }, (e) => {
        res.status(400).send(e);
      })
});

app.get('/todos', (req,res) => {
    Todo.find().then((MyTodos) => {
        res.send({MyTodos});
    }, (e) => {
        res.status(400).send(e);
      })
});

app.get('/users/:id', (req, res) => {
    var id = req.params.id;
   
   if(!ObjectID.isValid(id)) {
    return res.status(404).send();
     }

     User.findById(id).then((user)=>{
        if(!user){
           return res.status(404).send();
        }
        res.send({user});
    }).catch((e)=> {
        res.status(400).send();
    });
   });

app.delete('/users/:id', (req,res) => {
    var id =req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    
    User.findByIdAndRemove(id).then((doc)=>{
        if(!doc){
            return res.status(404).send();
        }
        res.send({doc});
    }).catch((e)=> {
        res.status(400).send();
    });
});
   
app.listen(3000, () => {
    console.log('Started on port 3000');
});



// var Todo = mongoose.model('MyTodos', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//      },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text: 'goa'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e)=> {
//     console.log('Unable to save todo')
// });

// var otherTodo = new Todo({
//        text: ' my otherTodo'
// });
// otherTodo.save().then((doc) => {
//     console.log('Saved otherTodo', doc);
// }, (e)=> {
//     console.log('Unable to save todo');
// });

