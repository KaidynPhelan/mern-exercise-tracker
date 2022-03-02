// creating the route
const router = require('express').Router();
// require the model from mongoose
let User = require('../models/user.model');


// this is a route that handles incoming 
router.route('/').get((req, res) => {
    // mongoose method
    User.find()
    // returns users from the database
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// incoming post requests
router.route('/add').post((req, res) =>{
    const username = req.body.username;
    const newUser = new User({username});

    // new user saved to database
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// must be on all router files
module.exports = router;
