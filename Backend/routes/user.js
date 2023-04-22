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
    const {error} = validateNewUser(req.body)

    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    // Add the new user if no error
    const newUser = new userObj(req.body);

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
    const generatorId = req.body.generatorId;
    const scannerId = req.body.scannerId;
    const generatorData = req.body.generatorData;
    const scannerData = req.body.scannerData;
    const gUser = await userObj.findById(generatorId);
    const sUser = await userObj.findById(scannerId);

    // See if overlap already exists by checking all the conditions
    const indexSG = sUser['connections'].findIndex(data => data['connectId'] == rUser['_id']);
    const indexGS = gUser['connections'].findIndex(data => data['connectId'] == gUser['_id']);

    console.log(`IndexSR : ${indexSG}`);
    console.log(`IndexRS : ${indexGS}`);

    // Handle the two cases
    if (indexSG != -1 && indexGS != -1) {
        // Replace the overlap data
        sUser['connections'][indexSR]['connectPlatforms'] = generatorData;

        // Replace the overlap data
        gUser['connections'][indexRS]['connectPlatforms'] = scannerData;

    } else {
        sUser['connections'].push({
            "connectId": gUser['_id'],
            "connectPlatforms": generatorData
        });

        // Replace the overlap data
        gUser['connections'].push({
            "connectId": sUser['_id'],
            "connectPlatforms": scannerData
        });
    }

    // Push and update the data
    const ts = await userObj.findByIdAndUpdate(generatorId, gUser, {new: true}).then((data) => {
        console.log(data);
    }).catch((err) => {
        if (err) {
            return res.status(500).json({
                'message': 'Backend error',
            });
        }
    });

    // Push and update the data
    const tr = await userObj.findByIdAndUpdate(scannerId, sUser, {upsert: true}).then((data) => {
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