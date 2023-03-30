const router = require('express').Router()
const { reset } = require('nodemon');
const {
    userObj, 
    validateUser,
    validateUserOnUpdate,
    validateNewUser
} = require('../models/user.model')

router.get('/test', async (req, res) => {
    return res.status(200).json({
        'message': 'Test route working',
    });
})

router.post('/getData', async (req, res) => {
    // Validate the user boy
    const {error} = validateUser(req.body);
    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    // If not error get the user data
    const userData = await userObj.findById(res.body.userId);

    if (!userData) {
        return res.status(400).json({
            'message': 'User not found/valid',
        });
    }

    return res.status(200).json(userData);
})

router.post('/addUser', async (req, res) => {
    // Validate the user body
    console.log(req.body)
    const {error} = validateNewUser(req.body)

    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    // Add the new user if no error
    const newUser = new userObj({
        'userName': req.body.userName,
        'platforms': req.body.platforms,
    });

    if (!newUser) {
        return res.status(400).json({
            'message': 'Error creating the new user',
        });
    }

    // Push the user if valid
    newUser.save().then((data) => {
       return res.status(200).json(data);
    }).catch((err) => {
        console.log(error);
        return res.status(500).json(err);
    })
})


module.exports = router;