import bcrypt from "bcrypt";

export const GetSalt = async () => {
  return await bcrypt.genSalt();
};

export const GetHashedPassword = async (
  enterdPassword: string,
  salt: string
) => {
  return await bcrypt.hash(enterdPassword, salt);
};
export const validate = async (
  enterdPassword: string,
  savedPassword: string,
  salt: string
) => {
  return (await GetHashedPassword(enterdPassword, salt)) === savedPassword;
};
