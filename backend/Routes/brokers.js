import connection from "../Database/conn.js";
import Broker from "../Models/broker.js";
import express from "express";
import dotenv from "dotenv";
import { validateBrokerAdd } from "../Middlewares/brokerValidation.js";

dotenv.config();

const brokerRouter = express.Router();

// Add a new broker

brokerRouter.post("/add-new", validateBrokerAdd, async (req, res) => {
  const { fullName, email, contactNumber, address, city } = req.body;

  await connection();

  // adding a broker
  try {
    const broker = new Broker({
      fullName,
      email,
      contactNumber,
      address,
      city,
    });

    await broker.save();

    if (!broker) {
      return res.status(400).json({ message: "Failed to add broker" });
    }

    res.status(201).json({ message: "Broker added successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all brokers

brokerRouter.get("/get-all", async (req, res) => {
  await connection();

  try {
    const brokers = await Broker.find();
    res.status(200).json(brokers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get one broker according to the ID

brokerRouter.get("/get-one/:id", async (req, res) => {
  const { id } = req.params;

  await connection();

  try {
    const broker = await Broker.findById(id);
    if (!broker) {
      return res.status(400).json({ message: "Broker not found" });
    }
    res.status(200).json({ message: "Broker not found" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update broker

brokerRouter.put("/update/id", async (req, res) => {
  const { id } = req.params;
  const { fullName, emai, contactNumber, address, city } = req.body;

  await connection();

  try {
    const broker = await Broker.findByIdAndUpdate(
      id,
      {
        fullName,
        email,
        contactNumber,
        address,
        city,
      },

      { new: true }
    );

    if (!broker) {
      return res.status(404).json({ message: "Broker not found" });
    }
    res.status(200).json({ message: "Broker updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete broker

brokerRouter.delete("/delete/:id", async (res, req) => {
  const { id } = req.params;

  await connection();

  try {
    const broker = await Broker.findByIdAndDelete(id);

    if (!broker) {
      return res.status(404).json({ message: "Broker not found" });
    }
    res.status(200).json({ message: "Broker deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default brokerRouter;
