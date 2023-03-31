const router = require('express').Router()
const { reset } = require('nodemon');
const {
    userObj, 
    validateUser,
    validateUserOnConnect,
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
    const userData = await userObj.findById(req.body.userId);

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

router.post('/connect', async (req, res) => {
    /*
    {
        senderId,
        receiverId,
        senderData,
        receiverData,
    } 
    */
    // Validate the user body
    const {error} = validateUserOnConnect(req.body)

    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    // Fetch both the users
    const sUser = await userObj.findById(req.body.senderId);
    const rUser = await userObj.findById(req.body.receiverId);

    // See if overlap already exists by checking all the conditions
    const indexSR = sUser['connectionIds'].findIndex(data => data['connectId'] == rUser['_id']);
    const indexRS = rUser['connectionIds'].findIndex(data => data['connectId'] == sUser['_id']);

    console.log(`IndexSR : ${indexSR}`);
    console.log(`IndexRS : ${indexRS}`);

    // Handle the two cases
    if (indexSR != -1 && indexRS != -1) {
        // Replace the overlap data
        sUser['connectionIds'][indexSR]['connectPlatforms'] = req.body.receiverData;

        // Replace the overlap data
        rUser['connectionIds'][indexRS]['connectPlatforms'] = req.body.senderData;

    } else {
        sUser['connectionIds'].push({
            "connectId": rUser['_id'],
            "connectPlatforms": req.body.receiverData
        });

        // Replace the overlap data
        rUser['connectionIds'].push({
            "connectId": sUser['_id'],
            "connectPlatforms": req.body.senderData
        });
    }
    console.log(sUser);
    console.log(rUser);

    // Push and update the data
    const ts = await userObj.findByIdAndUpdate(req.body.senderId, sUser, {new: true}).then((data) => {
        console.log(data);
    }).catch((err) => {
        if (err) {
            return res.status(500).json({
                'message': 'Backend error',
            });
        }
    });

    console.log("First")

    // Push and update the data
    const tr = await userObj.findByIdAndUpdate(req.body.receiverId, rUser, {upsert: true}).then((data) => {
        console.log(data);
    }).catch((err) => {
        if (err) {
            return res.status(500).json({
                'message': 'Backend error',
            });
        }
    });

    return res.status(200).json({
        'message': 'Saved successfull'
    });
})


module.exports = router;