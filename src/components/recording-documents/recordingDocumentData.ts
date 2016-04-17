import {Component, ViewChild} from 'angular2/core';

import {MessageBox} from '../windows/message-box';
import {Validate} from '../temporal-library/validate';
// import {Parse} from '../temporal-library/parse';
import {DateTextBox} from '../windows/dateTextBox';


enum PayMethod { card = 0, window = 1, store = 2, unknown = 99 };

@Component({
  selector: 'recording-document-data',
  templateUrl: './components/recording-documents/recordingDocumentData.html',
  directives: [MessageBox, DateTextBox]
})
export class RecordingDocumentsDataCmp {

  @ViewChild(MessageBox) public messageBox: MessageBox;
  public comunicationMethod: string = "";
  public bookNumber: string = "";
  public ownerEmail: string = "";

  public sendRecordingDocuments(): void {
    try {
      this.messageBox.showMessage("Enviando Documentos a Calificación......");
    } catch (e) {
      this.messageBox.showException(e);
    }
  }

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
     if (!Validate.isEmail(this.ownerEmail)) {
      this.messageBox.showMessage("Requiero el correo electrónico en formato alguien@ejemplo.com");
      return false;
    }
    return true;
  }

}
