import express from "express";
import { createDonation } from "../controllers/donation.controller.js";
import { authenticateUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/donate", authenticateUser, createDonation);

export default router;
