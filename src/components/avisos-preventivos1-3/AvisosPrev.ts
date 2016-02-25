import {Component} from 'angular2/core';

import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {OnlineServices, PendingNoteRequest} from 'empiria-land/online.services';

@Component({
  selector: 'AvisosPrev',
  templateUrl: './components/avisos-preventivos1-3/AvisosPrev.html',
  directives: [MATERIAL_DIRECTIVES]
})
export class AvisosPrevCmp {
  public foliorealModel: string = '';
  public otorgadoModel: string = '';
  public afavorModel: string = '';
  public cb1: boolean = false;
  public cb2: boolean = false;
  public selectedItemsActType: number;
  public exists: boolean = false;

public searchProperty(): boolean {
  this.exists = OnlineServices.existsProperty(this.foliorealModel);
  // TL72-F3K6-AC9H-5Z1Q   TL34-W5G6-K91Z-8R7Q
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
// return;
}
}
