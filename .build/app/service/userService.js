"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const response_1 = require("../utility/response");
// autoInjectable();
class UserService {
    // repository: UserRepository;
    // repository: UserRepository
    constructor() {
        // this.repository = repository;
    }
    // User Creation, Validation & Login
    CreateUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(event.body);
            return (0, response_1.SucessResponse)({ message: "Response from CreateUser" });
        });
    }
    UserLogin(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from userlogin" });
        });
    }
    GetVerificationToken(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({
                message: "verification code is sent to your registered mobile number!",
            });
        });
    }
    VerifyUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Verify User" });
        });
    }
    // User profile
    CreateProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Create User Profile" });
        });
    }
    GetProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Get User Profile" });
        });
    }
    EditProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Edit User Profile" });
        });
    }
    // Cart Section
    CreateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Create Cart" });
        });
    }
    GetCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Get Cart" });
        });
    }
    UpdateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Update Cart" });
        });
    }
    // Payment Section
    CreatePaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Create Payment Method" });
        });
    }
    GetPaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Get Payment Method" });
        });
    }
    UpdatePaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "response from Update Payment Method" });
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map