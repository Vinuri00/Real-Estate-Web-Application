import Admin from "../Models/admin.js";
import connection from "../Database/conn.js";
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { validateAdminLogin, validateAdminRegister } from "../Middlewares/adminValidation.js";

dotenv.config();

const adminRouter = express.Router();

// Register a new admin

adminRouter.post("/register", validateAdminRegister, async (req, res) => {
  const { fullName, username, email, password } = req.body;

  await connection();

  // adding an admin
  try {
    const admin = new Admin({
      fullName,
      username,
      email,
      password,
    });

    admin.password = admin.encryptAdminPassword(password);

    await admin.save();

    if (!admin) {
      return res.status(400).json({ message: "Admin registration failed" });
    }

    // Generate a token for the admin when they register
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Validate Admin

adminRouter.post("/login",validateAdminLogin, async (req, res) => {
  const { username, password } = req.body;

  await connection();

  try {
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(400).json({ message: "Admin does not exist" });
    }

    const isMatch = admin.validatePassword(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate a token for the admin when they login
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });
g
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default adminRouter;
