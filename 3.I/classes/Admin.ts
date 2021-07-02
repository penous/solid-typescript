import { PassAuth } from '../interfaces/PassAuth';

//admin cannot use google or facebook token
export class Admin implements PassAuth {
  private _password: string = 'admin';

  checkPassword(password: string): boolean {
    return password === this._password;
  }

  resetPassword() {
    this._password = <string>prompt('What is your new password?');
  }
}
