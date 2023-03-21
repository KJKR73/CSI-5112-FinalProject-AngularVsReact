const mongoose = require('mongoose')
const Joi = require('joi')

// Define the schema
const userSchema = mongoose.Schema({
    userId: String,
    platforms: [{
        platformId: String,
        PlatformLink: String,
    }],
    connectionIds: [{
        connectId: String,
        connectPlatforms: [{
            connectPlatFormId: String,
            connectPlatformShared: Boolean,
        }],
    }],
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
function validateUserOnUpdate(data) {
    const schema = Joi.object({
        userId: Joi.string().required(),
        shareId: Joi.string().required(),
    });
    return schema.validate(data);
}

exports.userObj = userObj;
exports.validateUser = validateUser;
exports.validateUserOnUpdate = validateUserOnUpdate;

