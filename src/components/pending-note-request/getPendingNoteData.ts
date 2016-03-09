import {Component, ViewChild} from 'angular2/core';

import {OnlineServices, PendingNoteRequest} from 'empiria-land/online.services';
import {MessageBox} from '../windows/message-box';

@Component({
  selector: 'get-pending-note-data',
  templateUrl: './components/pending-note-request/get-pending-note-data.html' ,
   directives: [MessageBox]
})
export class GetPendingNoteDataCmp {
  public realPropertyUIDModel: string = '';
  public requestedByModel: string = '';
  public projectedOwnerModel: string = '';
  public selectedItemsActTypeModel: number;
  public exists: boolean = false;

  @ViewChild(MessageBox) public messageBox: MessageBox;

public searchProperty(): boolean {
try {
    this.exists = OnlineServices.existsProperty(this.realPropertyUIDModel);
    if (this.exists === true) {
this.messageBox.showMessage("!PREDIO ENCONTRADO¡");
    } else {
this.messageBox.showMessage("EL PREDIO NO ES VALIDO....");
    }
    this.exists = false;
    return true;
} catch ( e ) {
      this.messageBox.showException( e );
    }
}

public createPreliminaryNotice(): void {
try {
    let request:  PendingNoteRequest = {
      realPropertyUID: this.realPropertyUIDModel,
      externalTransactionNo: (Math.random() * 1000000).toFixed(0),
      externalTransactionTime: new Date(2016, 1, 16, 14, 10, 34),
      paymentAmount: 120.00,
      paymentReceiptNo: "A-89078-2016." +  (Math.random() * 1000).toFixed(0),
      requestedBy: this.requestedByModel,
      notaryId: 73,
      projectedActId: this.selectedItemsActTypeModel,
      projectedOwner: this.projectedOwnerModel
    };
    let transaction = OnlineServices.requestPendingNoteRecording(request);
this.messageBox.showMessage("Creando aviso...: " + transaction);
} catch ( e ) {
      this.messageBox.showException( e );
    }
}
}
