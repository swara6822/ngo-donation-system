import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./shared/db/connect.js";
import userAuthRoutes from "./user/routes/auth.routes.js";
import userRoutes from "./user/routes/user.routes.js";
import donationRoutes from "./user/routes/donation.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

// connect to database
connectDB();

// routes
app.use("/api/user", userAuthRoutes);
app.use("/api/user", userRoutes);
app.use("/api/user", donationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
