const slug = require('mongoose-slug-generator');
const mongoose = require('mongoose');
mongoose.plugin(slug);

<<<<<<< HEAD
let postSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true},

    userPassword: {
        type: String,
        required: true}
})

postSchema.path('title').validate(function(title) {
    return title && title.length > 3;
}, "Title must be more than 3 characters")

let postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
=======

let postSchema = new mongoose.Schema({
    
    // add 2 fields, login and register

    login: {
        type: String,
        required: true
    },
    register: {
        type: String,
        required: true
    },
   
    created_at: {
        type: Date,
        default: Date.now
    },
    
});

// EXAMPLE OF CUSTOM VALIDATOR TO MAKE SURE STRING IS MORE THAN 3 CHARACTERS

let UsersModel = mongoose.model('Post', postSchema);

module.exports = postModel;
>>>>>>> c3f7e0ac2d58f3da969c3aab58cf93771d6baf5c
