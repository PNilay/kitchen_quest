import mongoose, { Schema, Model } from "mongoose";

export interface UserDocument {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minLength: [2, "First name must be at least 2 characters"],
      maxLength: [26, "First name must be no more than 26 characters"],
      match: [/^[\p{L}\p{M}' -]+$/u, "Provide a valid first name"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minLength: [2, "Last name must be at least 2 characters"],
      maxLength: [26, "Last name must be no more than 26 characters"],
      match: [/^[\p{L}\p{M}' -]+$/u, "Provide a valid last name"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email"
      ]
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Password must be at least 8 characters"],
      mathc: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+=[\]{};:'"\\|,.<>/?]).+$/,
        "Password must include uppercase, lowercase, number, and special character"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true
  }
);

// Check if a model already exists otherwise create a new one
const UserModel: Model<UserDocument> = mongoose.models?.User || mongoose.model<UserDocument>("User", UserSchema);

export default UserModel;
