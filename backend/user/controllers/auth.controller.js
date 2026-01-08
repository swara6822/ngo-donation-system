import { createUser } from "../services/auth.service.js";
import { loginUser } from "../services/auth.service.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await createUser({ name, email, password });

    return res.status(201).json({
      message: "User registered successfully",
      userId: user._id,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const data = await loginUser({ email, password });

    return res.status(200).json({
      message: "Login successful",
      ...data,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};