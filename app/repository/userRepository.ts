import { UserModel } from "../models/UserModel";

export class UserRepository {
  constructor() {}
  async createAccount({ email, password, phone, salt, userType }: UserModel) {
    console.log("repo created /user created in DB");
  }
}
