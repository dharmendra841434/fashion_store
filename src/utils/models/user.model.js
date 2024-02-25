import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      lowecase: true,
      trim: true,
    },
    gender: {
      type: String,
      lowecase: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    countryCode: {
      type: String,
      trim: true,
      required: true,
    },
    cartItems: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.methods.isPasswordCorrect = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      firstName: this.firstName,
      lastName: this.lastName,
    },
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.NEXT_PUBLIC_ACCESS_TOKEN_EXPIRY,
    }
  );
};
// userSchema.methods.generateRefreshToken = function () {
//   return jwt.sign(
//     {
//       _id: this._id,
//     },
//     process.env.REFRESH_TOKEN_SECRET,
//     {
//       expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
//     }
//   );
// };

// export const User = mongoose.model("User", userSchema);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
