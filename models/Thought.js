const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()

        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //use a getter methog to format the timestamp on query
            get: moment().format('MMMM Do YYYY, h:mm:ss a')
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

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
            get: moment().format('MMMM Do YYYY, h:mm:ss a')
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
        ,
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    });

    ThoughtSchema.virtual('reactionCount').get(function () {
        return this.reactions.length;
    })

    const Thought = model('Thought', ThoughtSchema);

    module.exports = Thought;