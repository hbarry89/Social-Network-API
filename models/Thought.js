const mongoose = require('mongoose');

// Reaction subdocument schema
const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
// Use a getter method to format the timestamp on query
  }
},
{
  toJSON: {
// Schema Settings:
// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
  }
});

// Thought model schema
const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
// Use a getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
},
{
  toJSON: {
    virtuals: true
  },
  id: false
});

// Schema Settings:
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;