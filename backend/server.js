import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/auth.route.js";
import { connectDB } from "./db/connectDB.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
