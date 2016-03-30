import {Component, ViewChild} from 'angular2/core';
import {MessageBox} from '../windows/message-box';
import {Validate} from '../temporal-library/validate';
import {SecretTextBox} from '../windows/secretTextBox';
import {UserRegistrationMasterPageCmp} from '../user-registration/userRegistrationMasterPage';

@Component({
  selector: 'add-new-password',
  templateUrl: './components/user-registration/register-new-password.html',
  directives: [MessageBox, SecretTextBox, UserRegistrationMasterPageCmp]
})

export class RegisterNewPasswordCmp {
  @ViewChild(MessageBox) public messageBox: MessageBox;
  public newPassword: string = "";
  public confirmPassword: string = "";
  public title: string = "Registrar su nueva contraseña";
  public subTitle: string = " Su cuenta de correo electrónico ya quedo registrada. Ahora solo es neceario " +
                "nos proporcione una contraseña de acceso.";
  public email: string = "cyanez@ontica.org";

  public savePassword(): void {
    try {
      if (!this.validateForm()) {
        return;
      }
      this.messageBox.showMessage("La contraseña sea actualizado  satisfactoriamente!!!");
      } catch (e) {
      this.messageBox.showException(e);
    }
  }

  private validateForm(): boolean {
    if (!Validate.hasValue(this.newPassword)) {
      this.messageBox.showMessage("Requiero la contraseña nueva ");
      return false;
    }
    if (!Validate.hasValue(this.confirmPassword)) {
      this.messageBox.showMessage("Requiero que se confirme la contraseña ");
      return false;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.messageBox.showMessage("La nueva contraseña y la contraseña que se ha confirmado " +
        " no son iguales");
      return false;
    }
    return true;
  }

}
