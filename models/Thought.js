const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Thought model schema
const thoughtSchema = new Schema(
{
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

// Create a virtual property `reactionCount` that gets the amount of reactions associated with a thought
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Formats the date using the 'dateformat' package
function dateFormat(date) {
  return date.toLocaleString();
}

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;