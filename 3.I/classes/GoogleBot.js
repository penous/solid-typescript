"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleBot = void 0;
class GoogleBot {
    setGoogleToken(token) {
        this._googleToken = token;
    }
    checkGoogleLogin(token) {
        return token === this._googleToken;
    }
}
exports.GoogleBot = GoogleBot;
