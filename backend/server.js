import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connection from "./Database/conn.js";
import adminRouter from "./Routes/admins.js";
import brokerRouter from "./Routes/brokers.js";
import lawyerRouter from "./Routes/lawyers.js";

dotenv.config();

const app = express();
const corsData = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5000",
    "http://159.223.75.67:5000",
    "http://159.223.75.67:5173",
  ],
  credentials: true,
  optionsuccessStatus: 200,
};

app.use(cors(corsData));

app.use(bodyParser.json());

app.use(express.json());

app.use("/admins", adminRouter);
app.use("/brokers", brokerRouter);
app.use("/lawyers", lawyerRouter);

app.listen(3000, async () => {
  await connection();
  console.log("Server is running on port 3000");
});
