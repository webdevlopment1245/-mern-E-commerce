import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    return hashedpassword;
  } catch (error) {
    console.log("Error in hashing password", error);
  }
};
export const comparePassword = async (password, hassedpassword) => {
  return bcrypt.compare(password, hassedpassword);
};
