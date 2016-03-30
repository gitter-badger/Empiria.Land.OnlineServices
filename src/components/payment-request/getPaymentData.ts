import {Component, ViewChild} from 'angular2/core';

import {MessageBox} from '../windows/message-box';

enum PayMethod { card = 0, window = 1, store = 2, unknown = 99 };

@Component({
  selector: 'get-payment-data',
  templateUrl: './components/payment-request/getPaymentData.html',
  directives: [MessageBox]
})
export class GetPaymentDataCmp {

  @ViewChild(MessageBox) public messageBox: MessageBox;

  public paymentMethod: string = "unknown";
  public payPlace: string = "";
  public bankName: string = "";
  public cardNumber: string = "";
  public name: string = "";
  public month: string = "";
  public year: string = "";
  public validationCode: string = "";
  public payMode: string = "";

  public showFields(value: string): void {
    try {
      this.cleanPayForm();
      this.paymentMethod = PayMethod[PayMethod[value]];
    } catch (e) {
      this.messageBox.showException(e);
    }
  }
  public cleanPayForm(): void {
    try {
      this.payPlace = "";
      this.bankName = "";
      this.cardNumber = "";
      this.name = "";
      this.month = "";
      this.year = "";
      this.validationCode = "";
    } catch (e) {
      this.messageBox.showException(e);
    }
  }
  public createPayment(): void {
    try {
      this.messageBox.showMessage("Procesando el pago......");
    } catch (e) {
      this.messageBox.showException(e);
    }
  }

}
