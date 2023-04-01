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
exports.ChatGPT = void 0;
const openai_1 = require("openai");
class ChatGPT {
    constructor(chatApiKey) {
        this.configuration = new openai_1.Configuration({ apiKey: chatApiKey });
        this.openai = new openai_1.OpenAIApi(this.configuration);
    }
    askGPT(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.openai.createChatCompletion({
                messages: [{ role: "user", content: message }],
                model: "gpt-3.5-turbo",
            });
        });
    }
}
exports.ChatGPT = ChatGPT;
