import { APIGatewayProxyEventV2 } from "aws-lambda";
import { SucessResponse, ErrorResponse } from "../utility/response";
import { UserRepository } from "app/repository/userRepository";
import { autoInjectable } from "tsyringe";

// autoInjectable();
export class UserService {
  // repository: UserRepository;
  // repository: UserRepository
  constructor() {
    // this.repository = repository;
  }

  // User Creation, Validation & Login
  async CreateUser(event: APIGatewayProxyEventV2) {
    console.log(event.body);

    return SucessResponse({ message: "Response from CreateUser" });
  }

  async UserLogin(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from userlogin" });
  }

  async GetVerificationToken(event: APIGatewayProxyEventV2) {
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
