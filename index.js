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
const chalk_1 = __importDefault(require("chalk"));
const express_1 = __importDefault(require("express"));
const GoogleOAuthToJWT_1 = __importDefault(require("./GoogleOAuthToJWT"));
const app = (0, express_1.default)();
const port = 1270;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/:access_token?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const access_token = req.params.access_token;
        const tokenId = yield (0, GoogleOAuthToJWT_1.default)(access_token);
        res.status(200).send(tokenId);
    }
    catch (err) {
        res.status(401).send({ message: "Your access_token can't be processed. Might be invalid or expired." });
    }
}));
app.listen(port, () => {
    console.log(`${chalk_1.default.green('Google OAuth to JWT')} is running at http://localhost:${port}`);
});
