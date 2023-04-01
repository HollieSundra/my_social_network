const { Schema, model, Types } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/, 'Please enter a valid email above'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
    friends: [
      {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

// Friend Count
userSchema.virtual("friendCount").get(function() {
  return this.friends.length;
});


const User = model('User', userSchema);

module.exports = User;
