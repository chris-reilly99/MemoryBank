const { Schema, model } = require ('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    // these are commented out currently, may not need to be but I'm basing the structure off of the example at week 21 activity 26, and they did not have 'thoughts' included in the user schema
    // memories: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Memory',
    //   }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  });
  
  userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = model('User', userSchema);
  
  module.exports = User;
  