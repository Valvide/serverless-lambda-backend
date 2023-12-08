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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatePassword = exports.GetHashedPassword = exports.GetSalt = exports.VerifyToken = exports.GetToken = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const APP_SECRET = " our_app_secret";
const GetToken = ({ email, password, userType, phone, }) => __awaiter(void 0, void 0, void 0, function* () {
    const signed = jsonwebtoken_1.default.sign({
        email,
        password,
        userType,
        phone,
    }, APP_SECRET, { expiresIn: "30d" });
    return signed;
});
exports.GetToken = GetToken;
const VerifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (token !== "") {
            const payload = yield jsonwebtoken_1.default.verify(token.split(" ")[1], APP_SECRET);
            return payload;
        }
    }
    catch (error) {
        console.log(`verifyToken error ${error}`);
        return false;
    }
});
exports.VerifyToken = VerifyToken;
const GetSalt = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.genSalt();
});
exports.GetSalt = GetSalt;
const GetHashedPassword = (enterdPassword, salt) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.hash(enterdPassword, salt);
});
exports.GetHashedPassword = GetHashedPassword;
const ValidatePassword = (enterdPassword, savedPassword, salt) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield (0, exports.GetHashedPassword)(enterdPassword, salt)) === savedPassword;
});
exports.ValidatePassword = ValidatePassword;
//# sourceMappingURL=password.js.map