const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            minlength: 1,
            maxLength: 280,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //use a getter methog to format the timestamp on query
        },
        username: {
            type: String,
            required: true
        },
        reactions: {
            //array of nest documents created with the reaction schema
        }

    })

    const Thought = model('Thought', ThoughtSchema);

    module.exports = Thought;