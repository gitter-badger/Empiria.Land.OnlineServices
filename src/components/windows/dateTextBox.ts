import {Component, ViewChild} from 'angular2/core';
import {MessageBox} from '../windows/message-box';
import {Parse} from '../temporal-library/parse';

@Component({
  selector: 'date-text-box',
  templateUrl: './components/windows/date-text-box.html',
  inputs: ['label'],
  // outputs: ['changed'],
  directives: [MessageBox]
})
export class DateTextBox {

  @ViewChild(MessageBox) public messageBox: MessageBox;
  public boxType = 'date';
  public label: string = "";
  public ctrlViewDate: string = "show";
  public ctrlViewTxt: string = "hide";
  public documentDate: string = "";
  public documentDateTxt: string = "";
  public dateParts: any;
  public spanishMonth: string = "mes";

  public changeDate(value: string): boolean {
    try {
      this.ctrlViewTxt = "show";
      this.ctrlViewDate = "hide";
      this.boxType = 'text';
      console.log("fecha input date readDate DateTextBox: ", value);
      if (!Parse.parseDate(value)) {
        this.messageBox.showMessage("Requiero la fecha en formato dia/mes/año");
        return false;
      } else if (Parse.parseDate(value)) {
        this.documentDateTxt = (Parse.parseDate(value));
        // console.log(" fecha para text box::::", this.documentDateTxt);
        return true;
      }
    } catch (e) {
      this.messageBox.showException(e);
    }
  }

  public changeHTMLCtrl(): void {
    this.ctrlViewTxt = "hide";
    this.ctrlViewDate = "show";
    this.boxType = 'date';
  }


}
