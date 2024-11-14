import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoute from "./routes/auth.route.js";
import { connectDB } from "./db/connectDB.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve()
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
})

}

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
