"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./classes/User");
const Admin_1 = require("./classes/Admin");
const GoogleBot_1 = require("./classes/GoogleBot");
const passwordElement = document.querySelector('#password');
const typePasswordElement = (document.querySelector('#typePassword'));
const typeGoogleElement = (document.querySelector('#typeGoogle'));
const typeFacebookElement = (document.querySelector('#typeFacebook'));
const loginAsAdminElement = (document.querySelector('#loginAsAdmin'));
const resetPasswordElement = (document.querySelector('#resetPassword'));
let guest = new User_1.User();
let admin = new Admin_1.Admin();
let googleBot = new GoogleBot_1.GoogleBot();
document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest;
    if (user == guest) {
        user.setGoogleToken('secret_token_google');
        user.setFacebookToken('secret_token_fb');
    }
    debugger;
    let auth = false;
    if (user == guest) {
        switch (true) {
            case typePasswordElement.checked:
                auth = user.checkPassword(passwordElement.value);
                break;
            case typeGoogleElement.checked:
                auth = user.checkGoogleLogin('secret_token_google');
                break;
            case typeFacebookElement.checked:
                debugger;
                auth = user.getFacebookLogin('secret_token_fb');
                break;
        }
    }
    else if (typePasswordElement.checked) {
        auth = user.checkPassword(passwordElement.value);
    }
    if (auth) {
        alert('login success');
    }
    else {
        alert('login failed');
    }
});
resetPasswordElement.addEventListener('click', (event) => {
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});
