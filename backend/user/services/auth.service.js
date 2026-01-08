import bcrypt from "bcrypt";
import { User } from "../../shared/models/user.js";
import { ROLES } from "../../shared/constants/roles.js";

export const createUser = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: ROLES.USER,
  });

  return user;
};
