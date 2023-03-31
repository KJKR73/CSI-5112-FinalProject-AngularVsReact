const mongoose = require('mongoose')
const Joi = require('joi')

// Define the schema
const userSchema = mongoose.Schema({
    userName: {
        type: String,
        _id: false,
    },
    platforms: [{
        PlatformLink: {
            type: String,
            _id: false,
        },
    }],
    connectionIds: {
        _id: false,
        type: [{
            _id: false,
            connectId: {
                _id: false,
                type: String,
            },
            connectPlatforms: {
                _id: false,
                type: [{
                    _id: false,
                    connectPlatFormId: String,
                }],
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
        senderId: Joi.string().required(),
        receiverId: Joi.string().required(),
        senderData: Joi.array().required(),
        receiverData: Joi.array().required(),
    });
    return schema.validate(data);
}

function validateNewUser(data) {
    const schema = Joi.object({
        userName: Joi.string().required(),
        platforms: Joi.array().required(),
    });
    return schema.validate(data);
}

exports.userObj = userObj;
exports.validateUser = validateUser;
exports.validateUserOnConnect = validateUserOnConnect;
exports.validateNewUser = validateNewUser

