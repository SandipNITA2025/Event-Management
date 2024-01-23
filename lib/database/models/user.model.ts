import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  photo: { type: String, require: false },
});

const User = models.User || model("User", UserSchema);

export default User;
