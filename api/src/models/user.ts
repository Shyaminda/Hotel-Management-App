import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export type UserType = {      //here the same type used here is used in userSchema below it is because for keep the correct type of the data within the project
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

userSchema.pre("save",async function(next){  //here we are using the pre function to hash the password before saving it to the database
  if(this.isModified("password")){           //this.isModified is a function which checks if the password is modified or not
      this.password=await bcrypt.hash(this.password,8);
  }
  next();
}) //this is a middleware function which is used to hash the password before saving it to the database

const User = mongoose.model<UserType>("User", userSchema);

export default User;