import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import categoryRoute from "./routes/categories.js";
import locationRoute from "./routes/locations.js";
import serviceRoute from "./routes/services.js";

const app = express();
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

//mongodb setup
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    throw error;
  }
};

//setup storage for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

//create upload middleware
const upload = multer({ storage: storage });
app.post("/api/upload", upload.array("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});

//API endpoint for file/image upload
app.use(upload.array("photo"));

//Other middleware
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/location", locationRoute);
app.use("/api/services", serviceRoute);

//error handling middleware
app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

//starting server
const PORT = 5000;

app.listen(PORT, () => {
  connect();
  console.log("Backend is running");
});
