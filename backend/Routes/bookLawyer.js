import connection from "../Database/conn.js";
import BookLawyer from "../Models/booklawyer.js";
import express from "express";
import dotenv from "dotenv";import { validateBooking } from "../Middlewares/bookLawyerValidation.js";
import mongoose from "mongoose";

dotenv.config();

const bookLawyerRoute = express.Router();

// create a new booking

bookLawyerRoute.post("/add-booking", validateBooking, async (req, res) => {
  const { 
    fullName, 
    contactNumber, 
    nicNumber, 
    email, 
    propertyType ,
    date,
  } = req.body;

  await connection();

  // create booking
  try {
    const booking = new BookLawyer({
      fullName,
      contactNumber,
      nicNumber,
      email,
      propertyType,
      date,
    });

    await booking.save();

    if (!booking) {
      return res.status(400).json({ message: "Failed to create booking" });
    }

    res.status(201).json({ message: "Booking placed successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all bookings

bookLawyerRoute.get("/get-all", async (req, res) => {
  await connection();

  try {
    const booking = await BookLawyer.find();
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get one booking according to the ID

bookLawyerRoute.get("/get-one/:id", async (req, res) => {
  const { id } = req.params;

  await connection();

  try {
    const booking = await BookLawyer.findById(id);
    if (!booking) {
      return res.status(400).json({ message: "Booking is not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update booking

bookLawyerRoute.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { fullName, contactNumber, nicNumber, email, propertyType, date } = req.body;

  await connection();

  try {
    const booking = await BookLawyer.findByIdAndUpdate(id, {
        fullName,
        contactNumber,
        nicNumber,
        email,
        propertyType,
        date,
    });

    if (!booking) {
      return res.status(404).json({ message: "Booking is not found" });
    }
    res.status(200).json({ message: "Booking updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete booking

bookLawyerRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  await connection();

  try {
    const booking = await BookLawyer.findByIdAndDelete(id);

    if (!booking) {
      return res.status(404).json({ message: "Booking is not found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default bookLawyerRoute;
