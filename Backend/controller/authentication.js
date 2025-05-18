import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const createuser = async (req, res) => {
  const { username, number, password } = req.body;

  const isuser = mongoose.findOne(number);

  if (number === isuser.number) {
    res.json({ message: "User Already Exits" });
  }

  const hashpassword = await bcrypt.hash(password,10);

  try {
    const newuser = new User({
      username,
      number,
      hashpassword,
    });

    res
      .status(200)
      .json({ message: "User Created Successfully", data: newuser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

export const loginuser = async(req,res)=>{
    const {number,password}=req.body;

    try {
        const user = await User.findOne({number: number, password: password});
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: "Login successful", data: user , token: token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
}
