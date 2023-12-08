import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

import { UserModel } from "../models/UserModel";

const APP_SECRET = " our_app_secret";

export const GetToken = async ({
  email,
  password,
  userType,
  phone,
}: UserModel) => {
  const signed = Jwt.sign(
    {
      email,
      password,
      userType,
      phone,
    },
    APP_SECRET,
    { expiresIn: "30d" }
  );

  return signed;
};
export const VerifyToken = async (
  token: string
): Promise<UserModel | false> => {
  try {
    if (token !== "") {
      const payload = await Jwt.verify(token.split(" ")[1], APP_SECRET);
      return payload as UserModel;
    }
  } catch (error) {
    console.log(`verifyToken error ${error}`);
    return false;
  }
};

export const GetSalt = async () => {
  return await bcrypt.genSalt();
};

export const GetHashedPassword = async (
  enterdPassword: string,
  salt: string
) => {
  return await bcrypt.hash(enterdPassword, salt);
};
export const ValidatePassword = async (
  enterdPassword: string,
  savedPassword: string,
  salt: string
) => {
  return (await GetHashedPassword(enterdPassword, salt)) === savedPassword;
};
