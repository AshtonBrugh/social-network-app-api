const { model, Schema } = require('mongoose');
const { validator } = require('validator');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validator: validator.isEmail,
        message: 'This is not a valid email!',
        isAsync: false
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'

        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, friends) => total + friends.length + 1, 0);
});

const User = model('User, UserSchma');

module.exports = User;