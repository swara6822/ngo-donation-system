import mongoose from "mongoose";
import { DONATION_STATUS } from "../constants/donationStatus.js";

const donationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(DONATION_STATUS),
      default: DONATION_STATUS.PENDING,
    },
    paymentId: {
      type: String, // from gateway (id generated when payment is successful)
    },
  },
  { timestamps: true }
);

export const Donation = mongoose.model("Donation", donationSchema);
