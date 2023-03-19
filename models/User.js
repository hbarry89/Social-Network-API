const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Must match a valid email address (look into Mongoose's matching validation)
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},
{
  toJSON: {
    virtuals: true
  },
  id: false
});

// Schema Settings:
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

const User = mongoose.model('User', userSchema);

module.exports = User;