import { Donation } from "../../shared/models/Donation.js";

export const createDonation = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        message: "Valid donation amount is required",
      });
    }

    const donation = await Donation.create({
      user: req.user.userId,
      amount,
      status: "PENDING",
    });

    return res.status(201).json({
      message: "Donation attempt created",
      donationId: donation._id,
      status: donation.status,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};
