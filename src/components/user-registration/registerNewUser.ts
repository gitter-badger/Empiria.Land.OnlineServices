import {Component, ViewChild} from 'angular2/core';
import {MessageBox} from '../windows/message-box';
import {Validate} from '../temporal-library/validate';
import {UserRegistrationMasterPageCmp} from '../user-registration/userRegistrationMasterPage';

@Component({
  selector: 'register-new-user',
  templateUrl: './components/user-registration/register-new-user.html',
  directives: [MessageBox, UserRegistrationMasterPageCmp]
})

export class RegisterNewUserCmp {

  public email: string = "";
  public title: string = "Registro de nuevos usuarios";
  public subTitle: string = "Bienvenido. Lo único que se requiere para registrarse es una cuenta de " +
  "correo electrónico. ";
  @ViewChild(MessageBox) public messageBox: MessageBox;

  public sendConfirmation(): void {
    try {
      if (!this.validateForm()) {
        return;
      }
      this.messageBox.showMessage("Se le enviará un correo electronico con las instrucciones " +
                                  "para dar de alta su  contraseña");
    } catch (e) {
      this.messageBox.showException(e);
    }
  }

  private validateForm(): boolean {
    if (!Validate.isEmail(this.email)) {
      this.messageBox.showMessage("Requiero el correo electrónico en formato alguien@ejemplo.com");
      return false;
    }
    return true;
  }

}
