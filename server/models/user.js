var mongoose = require('mongoose');

var User = mongoose.model('MyUsers', {
    Email: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        trim: true
     },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});
module.exports ={User};