import Lawyer from "../Models/lawyer.js";
import connection from "../Database/conn.js";
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  validateLawyerLogin,
  validateLawyerRegister,
} from "../Middlewares/lawyerValidation.js";
import mongoose from "mongoose";

dotenv.config();

const lawyerRouter = express.Router();

// Register new lawyer
lawyerRouter.post("/register", async (req, res) => {
  const {
    fullName,
    userName,
    email,
    contactNumber,
    password,
    companyName,
    licenseNumber,
    image,
    yearsOfExperience,
  } = req.body;

  // const image = req.files.image;

  console.log(
    userName,
    email,
    contactNumber,
    password,
    companyName,
    licenseNumber,
    yearsOfExperience
  );

  await connection();

  // adding an lawyer
  try {
    const lawyer = new Lawyer({
      fullName,
      userName,
      email,
      contactNumber,
      password,
      companyName,
      licenseNumber,
      yearsOfExperience,
      image,
    });

    lawyer.password = lawyer.encryptLawyerPassword(password);

    await lawyer.save();

    console.log(lawyer);

    if (!lawyer) {
      return res.status(400).json({ message: "Lawyer registration failed" });
    }

    // Generate a token for the lawyer when they register
    const token = jwt.sign(
      { lawyerId: lawyer._id, lawyerName: lawyer.fullName },
      process.env.JWT_SECRET,
      {
        expiresIn: 3600,
      }
    );

    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Login Lawyer
lawyerRouter.post("/login", validateLawyerLogin, async (req, res) => {
  const { userName, password } = req.body;

  await connection();

  try {
    const lawyer = await Lawyer.findOne({ userName });

    if (!lawyer) {
      return res.status(400).json({ message: "Lawyer does not exist" });
    }

    if (lawyer.status === 0) {
      return res.status(401).json({ message: "Lawyer not approved yet" });
    }

    if (lawyer.status === 2) {
      return res.status(401).json({ message: "Lawyer rejected" });
    }

    const isMatch = lawyer.validatePassword(password, lawyer.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate a token for the lawyer when they login
    // Generate a token for the lawyer when they login
    const token = jwt.sign(
      { lawyerId: lawyer._id, lawyerName: lawyer.fullName },
      process.env.JWT_SECRET,
      {
        expiresIn: 3600,
      }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get-All lawyers
lawyerRouter.get("/get-all", async (req, res) => {
  await connection();

  try {
    const lawyers = await Lawyer.find();
    res.status(200).json(lawyers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get lawyer by id
lawyerRouter.get("/get-one/:id", async (req, res) => {
  const { id } = req.params;

  await connection();

  try {
    const lawyer = await Lawyer.findById(id);
    if (!lawyer) {
      return res.status(400).json({ message: "Lawyer not found" });
    }
    res.status(200).json(lawyer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update lawyer details
lawyerRouter.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Updating lawyer with ID:", id);

  if (!mongoose.Types.isValid(id)) {
    return res.status(400).json({ message: "Invalid lawyer ID" });
  }

  const {
    fullName,
    userName,
    email,
    contactNumber,
    password,
    licenseNumber,
    yearsOfExperience,
  } = req.body;

  await connection();

  try {
    const lawyer = await Lawyer.findByIdAndUpdate(id, {
      fullName,
      userName,
      email,
      contactNumber,
      password,
      licenseNumber,
      yearsOfExperience,
    });

    if (!lawyer) {
      return res.status(404).json({ message: "Lawyer not found" });
    }
    res.status(200).json({ message: "Lawyer updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete lawyer
lawyerRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  await connection();

  try {
    const lawyer = await Lawyer.findByIdAndDelete(id);

    if (!lawyer) {
      return res.status(404).json({ message: "Lawyer not found" });
    }
    res.status(200).json({ message: "Lawyer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Approve lawyer
lawyerRouter.put("/approve/:id", async (req, res) => {
  const { id } = req.params;

  await connection();

  try {
    const lawyer = await Lawyer.findByIdAndUpdate(id, {
      status: 1,
    });

    if (!lawyer) {
      return res.status(404).json({ message: "Lawyer not found" });
    }
    res.status(200).json({ message: "Lawyer approved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Reject lawyer
lawyerRouter.put("/reject/:id", async (req, res) => {
  const { id } = req.params;

  await connection();

  try {
    const lawyer = await Lawyer.findByIdAndUpdate(id, {
      status: 2,
    });

    if (!lawyer) {
      return res.status(404).json({ message: "Lawyer not found" });
    }
    res.status(200).json({ message: "Lawyer rejected successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default lawyerRouter;
