import { APIGatewayProxyEventV2 } from "aws-lambda";
import { SucessResponse, ErrorResponse } from "../utility/response";
import { UserRepository } from "../repository/userRepository";
import { autoInjectable } from "tsyringe";
import { plainToClass } from "class-transformer";
import { SignupInput } from "../models/dto/SignupInput";
import { AppValidationError } from "../utility/error";
import {
  GetHashedPassword,
  GetSalt,
  GetToken,
  ValidatePassword,
  VerifyToken,
} from "../utility/password";
import { LoginInput } from "../models/dto/LoginInput";
import {
  GenerateAccessCode,
  SendVerificationCode,
} from "../utility/notification";
// Example import statement in userService.js or userHandler.js

@autoInjectable()
export class UserService {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
    // await this.repository.createAccount();
  }

  // User Creation, Validation & Login
  async CreateUser(event: APIGatewayProxyEventV2) {
    // console.log(event.body);
    console.log("It's not working it's having an issue");
    // Catch any error if the connection with the DB fails

    try {
      const input = plainToClass(SignupInput, event.body);
      const error = await AppValidationError(input);
      if (error) return ErrorResponse(400, error);

      const salt = await GetSalt();
      const hashedPassword = await GetHashedPassword(input.password, salt);
      const data = await this.repository.createAccount({
        email: input.email,
        password: hashedPassword,
        phone: input.phone,
        salt,
        userType: "BUYER",
      });
      console.log(data);
      return SucessResponse(data);
    } catch (error) {
      console.log(error);
      return ErrorResponse(500, error);
    }
  }

  async UserLogin(event: APIGatewayProxyEventV2) {
    try {
      const input = plainToClass(LoginInput, event.body);
      const error = await AppValidationError(input);
      if (error) return ErrorResponse(400, error);

      const data = await this.repository.findAccount(input.email);

      //validate the users here (password)
      const verified = await ValidatePassword(
        input.password,
        data.password,
        data.salt
      );
      if (!verified) {
        throw new Error("Password does not match");
      }
      const token = await GetToken(data);

      return SucessResponse({ token });
    } catch (error) {
      console.log(error);
      return ErrorResponse(500, error);
    }
  }

  async GetVerificationToken(event: APIGatewayProxyEventV2) {
    const token = event.headers.authorization;
    const payload = await VerifyToken(token);
    if (payload) {
      const { code, expiry } = GenerateAccessCode();
      // save on DB to confirm verification??
      const response = await SendVerificationCode(code, payload.phone);
    }
    return SucessResponse({
      message: "verification code is sent to your registered mobile number!",
    });
  }

  async VerifyUser(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Verify User" });
  }

  // User profile
  async CreateProfile(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Create User Profile" });
  }

  async GetProfile(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Get User Profile" });
  }
  async EditProfile(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Edit User Profile" });
  }

  // Cart Section
  async CreateCart(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Create Cart" });
  }

  async GetCart(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Get Cart" });
  }

  async UpdateCart(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Update Cart" });
  }

  // Payment Section
  async CreatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Create Payment Method" });
  }

  async GetPaymentMethod(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Get Payment Method" });
  }

  async UpdatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "response from Update Payment Method" });
  }
}
