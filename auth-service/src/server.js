import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // Ajoute cette ligne
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

app.use(cors()); // Ajoute cette ligne
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.listen(5000, () => console.log("Auth service running on port 5000"));