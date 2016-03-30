import {Component, ViewChild} from 'angular2/core';
import {MessageBox} from '../windows/message-box';
import {Validate} from '../temporal-library/validate';
import {Login} from '../temporal-library/login';
import {SecretTextBox} from '../windows/secretTextBox';
import {UserRegistrationMasterPageCmp} from '../user-registration/userRegistrationMasterPage';

@Component({
  selector: 'login-form',
  templateUrl: './components/user-registration/login.html',
  directives: [MessageBox, SecretTextBox, UserRegistrationMasterPageCmp]
})
export class LoginCmp {

  public passwordType = 'password';
  public login = Login.newLogin();
  public title: string = "Acceso a usuarios Registrados";
  public subTitle: string = "Bienvenidos. ";
  @ViewChild(MessageBox) public messageBox: MessageBox;

  public doLogin(): void {
    try {
      if (!this.validateForm()) {
        return;
      }
      this.messageBox.showMessage("Bienvenido!!! \n ");
    } catch (e) {
      this.messageBox.showException(e);
    }
  }

  private validateForm(): boolean {
   if (!Validate.isEmail(this.login.email)) {
      this.messageBox.showMessage("Requiero el correo electrónico en formato alguien@ejemplo.com");
      return false;
    }
     if (!Validate.hasValue(this.login.password)) {
      this.messageBox.showMessage("Requiero la contraseña ");
      return false;
    }
    return true;
  }

}
