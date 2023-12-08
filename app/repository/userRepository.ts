import { UserModel } from "../models/UserModel";
import { DBClient } from "../utility/databaseClient";

export class UserRepository {
  constructor() {}
  async createAccount({ phone, email, password, salt, userType }: UserModel) {
    const client = await DBClient();
    await client.connect();

    const queryString =
      "INSERT INTO users(phone,email,password,salt,user_type) VALUES($1,$2,$3,$4,$5) RETURNING *";
    const values = [phone, email, password, salt, userType];
    const result = await client.query(queryString, values);
    await client.end();
    if (result.rowCount > 0) {
      return result.rows[0] as UserModel;
    }
  }

  // Find Account by email

  async findAccount(email: string) {
    const client = DBClient();
    await client.connect();

    const queryString =
      // "INSERT INTO users(phone,email,password,salt,user_type) VALUES($1,$2,$3,$4,$5) RETURNING *";
      "SELECT user_id ,email, password,phone,salt FROM users WHERE email =$1";
    const values = [email];
    const result = await client.query(queryString, values);
    await client.end();
    if (result.rowCount < 1) {
      throw new Error("user does not exist with the provided email");
    }
    return result.rows[0] as UserModel;
  }
}
