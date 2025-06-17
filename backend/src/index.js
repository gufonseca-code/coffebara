import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/coffebara";
console.log("Trying to connect to MongoDB at:", MONGO_URL);

mongoose
    .connect(MONGO_URL)
    .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
})
    .catch((err) => console.error("Failed to connect to MongoDB:", err));