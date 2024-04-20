import User from "../Models/user.js";
import connection from "../Database/conn.js";
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { 
    validateUserLogin, 
    validateUserRegister
} from "../Middlewares/userValidation.js";

dotenv.config();

const userRouter = express.Router();

// Register new user
userRouter.post("/register", validateUserRegister, async (req, res) => {
    const {
        fullName,
        userName,
        email,
        contactNumber,
        password,
    } = req.body;

    console.log(
        userName,
        email,
        contactNumber,
        password,
    );

    await connection();

    // adding an user
    try {
        const user = new User({
            fullName,
            userName,
            email,
            contactNumber,
            password,
        });

        user.password = user.encryptUserPassword(password);

        await user.save();

        console.log(user);

        if (!user) {
            return res.status(400).json({ message: "User not added" });
        }

        // Generate token for the user when they register
        const token = jwt.sign(
            { userId: user._id, userName: user.fullName },
            process.env.JWT_SECRET,
            {
                expiresIn: 3600,
            }
        );

        res.status(201).json({token});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
});

// User login
userRouter.post("/login", validateUserLogin, async (req, res) => {
    const { userName, password } = req.body;

    await connection();

    try {
        const user = await User.findOne({ userName });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = user.validatePassword(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate token for the user when they login
        const token = jwt.sign(
            { userId: user._id, userName: user.fullName },
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



export default userRouter;