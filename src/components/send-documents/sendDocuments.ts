import {Component, ViewChild} from 'angular2/core';
import {MessageBox} from '../windows/message-box';
import {Validate} from '../temporal-library/validate';
import {ValidateTextDir} from '../document-validation/validateTextDir';

@Component({
  selector: 'send-document',
  templateUrl: './components/send-documents/send-documents.html',
  directives: [MessageBox, ValidateTextDir]
})

export class SendDocumentCmp {
  @ViewChild(MessageBox) public messageBox: MessageBox;
  public validateRequestType: string = "unknown";
  public item: {pattern: string} = {pattern: ''};
  public transactionKey: string = "";
  public email: string = "";

  public showSelection(value: string): void {
    this.validateRequestType = value;
    switch (value) {
      case 'ticket': this.item.pattern = '^TL\\w{10}-\\d{1}$'; break;
      case 'certificate': this.item.pattern = '^CE\\w{4}-\\w{6}-\\w{6}$'; break;
      case 'document':  this.item.pattern = '^RP\\w{4}-\\w{6}-\\w{6}$'; break;
      default:
        break;
    }
  }

  public sendDocument(): void {
    if (!this.validateForm()) {
      return;
    }
      alert(this.validateRequestType);
  }

  public hasTransactionKeyValue(): boolean {
    let errorMessage: string = "";
    if (!Validate.hasValue(this.transactionKey)) {
      switch (this.validateRequestType) {
        case 'ticket': errorMessage = "Necesito un número de boleta "; break;
        case 'certificate': errorMessage = "Necesito el número de certificado "; break;
        case 'document':  errorMessage = "Necesito el número de documento "; break;
        default:
           break;
       }
       alert(errorMessage);
       return false;
     }
     return true;
  }

  public isValidTransactionKey(): boolean {
    let regExp = new RegExp(this.item.pattern);
    return regExp.test(this.transactionKey);
  }

  public validateForm(): boolean {
    if (!this.hasTransactionKeyValue()) {
      return false;
    }
    if (!this.isValidTransactionKey()) {
      return false;
    }
    if (!Validate.isEmail(this.email)) {
      this.messageBox.showMessage("Requiero el correo electrónico en formato alguien@ejemplo.com");
      return false;
    }
    return true;
  }

}
