import {Component, ViewChild} from 'angular2/core';
import {MessageBox} from '../windows/message-box';
import {Validate} from '../temporal-library/validate';
import {UserRegistrationMasterPageCmp} from '../user-registration/userRegistrationMasterPage';

@Component({
  selector: 'add-new-user',
  templateUrl: './components/user-registration/request-new-password.html',
  directives: [MessageBox, UserRegistrationMasterPageCmp]
})
export class RequestNewPasswordCmp {

  public email: string = "";
  public title: string = "Generación de una nueva contraseña";
  public subTitle: string = "Si no se acuerda de su contraseña, basta con que nos proporcione   " +
                            "nuevamente su correo electrónico y nosotros le enviaremos una liga " +
                            "con la que podrá registrar una nueva.";

  @ViewChild(MessageBox) public messageBox: MessageBox;

  public sendConfirmation(): void {
    try {
      if (!this.validateForm()) {
        return;
      }
      this.messageBox.showMessage("Se le enviará un correo electronico, con las instrucciones para " +
                                  "generar una nueva contraseña");
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
