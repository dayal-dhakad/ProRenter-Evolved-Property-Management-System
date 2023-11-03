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
import Service from "./models/Service.js";
import { connect } from "http2";

const app = express();
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

//mongodb setup

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Db connected Successfully');
  } catch (error) {
    console.log('Db connection failed');
    console.error(error);
    process.exit(1);
  }
};




//setup storage for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log("Received file:", file.originalname);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

//API endpoint for file/image upload
const upload = multer({ storage: storage });

app.post("/api/upload", upload.array("files"), async (req, res) => {
  try {
    const imageUrls = req.files.map((file) => file.path);

    const serviceData = {
      photo: imageUrls,
    };

    const createdService = await Service.create(serviceData);

    res.status(200).json(createdService);
  } catch (error) {
    console.error("Error uploading images:", error);
    res.status(500).json({ error: "Error uploading images" });
  }
});

//create uploads middleware
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
app.listen(5000, () => {
  connectDB();
  console.log("Backend is running");
});
