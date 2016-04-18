import {Component, ViewChild} from 'angular2/core';
import {Validate} from '../temporal-library/validate';
import {MessageBox} from '../windows/message-box';
import {ValidateTextDir} from './validateTextDir';

@Component({
  selector: 'document-validation',
  templateUrl: './components/document-validation/document-validation.html',
  directives: [MessageBox, ValidateTextDir]
})

export class DocumentValidationCmp {

  @ViewChild(MessageBox) public messageBox: MessageBox;

  public validateRequestType: string = "unknown";
  public originalChain: string = "";
  public digitalStamp: string = "";
  public item: {pattern: string} = {pattern: ''};
  public transactionKey: string = "";
  public existTransaction: boolean = true;
  public noExistTransaction: boolean = true;

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

  public documentValidation(): void {
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
    return true;
  }

  public existDocument(): boolean {
    // search on server the document via web Service
    if (this.validateRequestType === 'document') {
      this.noExistTransaction = true;
      return false;
    }
    this.existTransaction = true;
    return  true;
  }

  public tryAgain(): void {
    this.noExistTransaction = false;
  }

  public getelectronicSignatures(documentKey: string): void {
    this.existTransaction = true;
    this.originalChain = "33939-3-3-3-3-3-3";
    this.digitalStamp = "393939-393993-5689-3453-65674-45212-12345-5709-68863";
  }

}
