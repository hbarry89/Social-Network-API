const mongoose = require('mongoose');

// User model schema
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
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'thought'
    }
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
  ]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

// Friend virtual
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = mongoose.model('user', userSchema);

module.exports = User;