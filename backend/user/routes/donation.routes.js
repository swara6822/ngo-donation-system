import express from "express";
import { createDonation,
    getUserDonations, updateDonationStatus,
 } from "../controllers/donation.controller.js";
import { authenticateUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/donate", authenticateUser, createDonation);
router.get("/donations", authenticateUser, getUserDonations);
router.patch("/donate/:id", authenticateUser, updateDonationStatus);

export default router;
