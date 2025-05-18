import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { getAllDestinations } from "./controller/alldestination.controller.js";
import { createcontact } from "./controller/contact.js";
import { createuser, loginuser } from "./controller/authentication.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Hello World"));
app.get("/alldestination", getAllDestinations);
app.post("/contact", createcontact);
app.post("/createuser", createuser);
app.post("/login",loginuser)

// Connect DB and start server
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
  }
}

startServer();
