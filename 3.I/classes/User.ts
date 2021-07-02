import { PassAuth } from '../interfaces/PassAuth';
import { FacebookAuth } from '../interfaces/FacebookAuth';
import { GoogleAuth } from '../interfaces/GoogleAuth';

export class User implements PassAuth, FacebookAuth, GoogleAuth {
  private _password: string = 'user';
  private _facebookToken!: string;
  private _googleToken!: string;

  //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
  // Test it out by uncommenting the code below.
  checkGoogleLogin(token: string) {
    // return "this will not work";
    return token === this._googleToken;
  }

  setGoogleToken(token: string) {
    this._googleToken = token;
  }

  getFacebookLogin(token: string) {
    return token === this._facebookToken;
  }

  setFacebookToken(token: string) {
    this._facebookToken = token;
  }

  checkPassword(password: string): boolean {
    return password === this._password;
  }

  resetPassword() {
    this._password = <string>prompt('What is your new password?');
  }
}
