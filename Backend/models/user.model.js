const mongoose = require('mongoose')
const Joi = require('joi')

// Define the schema
const userSchema = mongoose.Schema({
    userName: {
        type: String,
        _id: false,
    },
    instagram: {
        type: String,
        _id: false,
        default: ''
    },
    facebook: {
        type: String,
        _id: false,
        default: ''
    },
    linkedin: {
        type: String,
        _id: false,
        default: ''
    },
    snapchat: {
        type: String,
        _id: false,
        default: ''
    },
    connections: {
        _id: false,
        type: [{
            _id: false,
            connectId: {
                _id: false,
                type: String,
            },
            connectPlatforms: {
                _id: false,
                type: [],
                default: []
            },
        }],
        default: []
    }
});

// Create the user object to inject model
const userObj = mongoose.model("Users", userSchema);

// Define new user validation logic
function validateUser(data) {
    const schema = Joi.object({
        userId: Joi.string().required(),
    });

    return schema.validate(data);
}

// Define update user logic
function validateUserOnConnect(data) {
    const schema = Joi.object({
        scannerId: Joi.string().required(),
        generatorId: Joi.string().required(),
        scannerData: Joi.object().required(),
        generatorData: Joi.object().required(),
    });
    return schema.validate(data);
}

function validateNewUser(data) {
    const schema = Joi.object({
        userName: Joi.string().required(),
        instagram: Joi.string(),
        facebook: Joi.string(),
        linkedin: Joi.string(),
        snapchat: Joi.string(),
        connections: Joi.array(),
    });
    return schema.validate(data);
}

exports.userObj = userObj;
exports.validateUser = validateUser;
exports.validateUserOnConnect = validateUserOnConnect;
exports.validateNewUser = validateNewUser

