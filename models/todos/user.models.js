import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    // also we can define like this
    // username:String,
    // email:String
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
  },
  { timestamps: true }
);
// model name is Use and the and the User is define on the basis of the userSchema
export const User = mongoose.model('User', userSchema);
