import {Component} from 'angular2/core';

import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {OnlineServices, PendingNoteRequest} from 'empiria-land/online.services';

@Component({
  selector: 'get-pending-note-data',
  templateUrl: './components/pending-note-request/get-pending-note-data.html',
  directives: [MATERIAL_DIRECTIVES]
})
export class GetPendingNoteDataCmp {
  public foliorealModel: string = '';
  public otorgadoModel: string = '';
  public afavorModel: string = '';
  public cb1: boolean = false;
  public cb2: boolean = false;
  public selectedItemsActType: number;
  public exists: boolean = false;

  public searchProperty(): boolean {
    this.exists = OnlineServices.existsProperty(this.foliorealModel);

    if (this.exists === true) {
      alert("!PREDIO ENCONTRADO¡" + this.foliorealModel);
      console.log("ENCONTRADO");
    } else {
      alert("EL PREDIO NO ES VALIDO......" + this.foliorealModel);
    }
    this.exists = false;

    return true;
  }

  public createPreliminaryNotice(): void {
    let request:  PendingNoteRequest = {
      realPropertyUID: this.foliorealModel,
      externalTransactionNo: (Math.random() * 1000000).toFixed(0),
      externalTransactionTime: new Date(2016, 1, 16, 14, 10, 34),
      paymentAmount: 120.00,
      paymentReceiptNo: "A-89078-2016." +  (Math.random() * 1000).toFixed(0),
      requestedBy: this.otorgadoModel,
      notaryId: 73,
      projectedActId: this.selectedItemsActType,
      projectedOwner: this.afavorModel
    };

    console.log("the request is : ", request);
    let transaction = OnlineServices.requestPendingNoteRecording(request);
    console.log("the transaction is : ", transaction);
    alert("Creando aviso...: " + transaction);
  }

}
