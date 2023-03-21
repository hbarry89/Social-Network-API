const { Schema, Types } = require('mongoose');

// Reaction subdocument schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
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
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Formats the date using the 'dateformat' package
function dateFormat(date) {
  return date.toLocaleString();
}

module.exports = reactionSchema;