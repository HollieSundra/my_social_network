const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => createdAtVal.toLocaleDateString()
    }
  },
);
// Schema to create Thought model
const thoughtSchema = new Schema (
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
      get: createdAtVal => createdAtVal.toLocaleDateString()
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
      getters: true,
    },
    id: false
  }
);

// Total count of reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});


const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
