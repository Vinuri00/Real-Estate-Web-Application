import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connection from "./Database/conn.js";
import adminRouter from "./Routes/admins.js";

dotenv.config();

const app = express();
const corsData = {
  origin: "http://localhost:5173",
  credentials: true,
  optionsuccessStatus: 200,
};

app.use(cors(corsData));

app.use(bodyParser.json());

app.use(express.json());

app.use("/admins", adminRouter);

app.listen(3000, async () => {
  await connection();
  console.log("Server is running on port 3000");
});
