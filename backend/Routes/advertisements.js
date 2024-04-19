import Advertisement from "../Models/advertisement.js";
import connection from "../Database/conn.js";
import express from "express";
import dotenv from "dotenv";
import { validateAdvertisement } from "../Middlewares/advertisementValidation.js";
import mongoose from "mongoose";

dotenv.config();

const advertisementRouter = express.Router();

// Create a new advertisement
advertisementRouter.post("/create", validateAdvertisement, async (req, res) => {
  const {
    title,
    description,
    ownerName,
    contactNumber,
    // images,
    price,
    location,
  } = req.body;

  await connection();

  // adding an advertisement
  try {
    const advertisement = new Advertisement({
      title,
      description,
      ownerName,
      contactNumber,
      // image,
      price,
      location,
    });

    await advertisement.save();

    if (!advertisement) {
      return res.status(400).json({ message: "Advertisement creation failed" });
    }

    res.status(201).json({ message: "Advertisement created successfully" });
  } catch (error) {
    // res.status(400).json({ message: error.message });
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


// Get all advertisements
advertisementRouter.get("/get-all", async (req, res) => {
  await connection();

  try {
    const advertisements = await Advertisement.find();
    res.status(200).json(advertisements);
  } catch (error) {
    // res.status(400).json({ message: error.message });
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


// Get advertisement by id
advertisementRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  await connection();

  try {
    const advertisement = await Advertisement.findById(id);
    res.status(200).json(advertisement);
  } catch (error) {
    // res.status(400).json({ message: error.message });
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


// Update advertisement details
advertisementRouter.put(
  "/update/:id",
  validateAdvertisement,
  async (req, res) => {
    const { id } = req.params;
    console.log("Updating advertisement with ID:", id);

    if (!mongoose.Types.isValid(id)) {
      return res.status(400).json({ message: "Invalid advertisement ID" });
    }

    const {
      title,
      description,
      ownerName,
      contactNumber,
      // image,
      price,
      Location,
    } = req.body;

    await connection();

    try {
      const advertisement = await Advertisement.findByIdAndUpdate(id, {
        title,
        description,
        ownerName,
        contactNumber,
        // image,
        price,
        Location,
      });

      if (!advertisement) {
        return res.status(400).json({ message: "Advertisement not found" });
      }
      res.status(200).json({ message: "Advertisement updated successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);


// Delete advertisement
advertisementRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  await connection();

  try {
    const advertisement = await Advertisement.findByIdAndDelete(id);

    if (!advertisement) {
      return res.status(400).json({ message: "Advertisement not found" });
    }
    res.status(200).json({ message: "Advertisement deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


// Approve advertisement
advertisementRouter.put("/approve/:id", async (req, res) => {
    const { id } = req.params;
    
    await connection();
    
    try {
        const advertisement = await Advertisement.findByIdAndUpdate(id, {
        status: 1,
        });
    
        if (!advertisement) {
        return res.status(400).json({ message: "Advertisement not found" });
        }
        res.status(200).json({ message: "Advertisement approved successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


// Reject advertisement
advertisementRouter.put("/reject/:id", async (req, res) => {
    const { id } = req.params;
    
    await connection();
    
    try {
        const advertisement = await Advertisement.findByIdAndUpdate(id, {
        status: 2,
        });
    
        if (!advertisement) {
        return res.status(400).json({ message: "Advertisement not found" });
        }
        res.status(200).json({ message: "Advertisement rejected successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

export default advertisementRouter;