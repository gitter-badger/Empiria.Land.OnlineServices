import {Component, ViewChild} from 'angular2/core';

import {OnlineServices, PendingNoteRequest, OnlineTransaction} from 'empiria-land/online.services';
import {MessageBox} from '../windows/message-box';

@Component({
   selector: 'get-pending-note-data',
   templateUrl: './components/pending-note-request/get-pending-note-data.html' ,
   directives: [MessageBox]
})
export class GetPendingNoteDataCmp {

  public pendingNoteRequest: PendingNoteRequest = this.getNewPendingNoteRequest();
  @ViewChild(MessageBox) public messageBox: MessageBox;

public searchProperty(): void {
try {
        let exists = OnlineServices.existsProperty(this.pendingNoteRequest.realPropertyUID);
            if (exists === true) {
            this.messageBox.showMessage("!PREDIO ENCONTRADO¡");
                } else {
            this.messageBox.showMessage("EL PREDIO NO ES VALIDO...");
             }
         exists = false;
} catch ( e ) {
        this.messageBox.showException( e );
    }
}

public createPreliminaryNotice(): void {
try {
        let onlineTransaction = this.getOnlineTransaction(this.pendingNoteRequest);
        this.messageBox.showMessage("Creando aviso preventivo...: " + onlineTransaction);
        this.showOnlineTransactionMessage(onlineTransaction);
} catch ( e ) {
        this.messageBox.showException( e );
    }
}

private getOnlineTransaction(pendingNoteRequest: PendingNoteRequest): OnlineTransaction {
        return OnlineServices.requestPendingNoteRecording(pendingNoteRequest);
    }

private getNewPendingNoteRequest(): PendingNoteRequest {
        let pendingNoteRequest: PendingNoteRequest = {
            realPropertyUID :  '',
            externalTransactionNo : (Math.random() * 1000000).toFixed(0),
            externalTransactionTime : new Date(2016, 1, 16, 14, 10, 34),
            paymentAmount : 120.00,
            paymentReceiptNo : "A-89078-2016." +  (Math.random() * 1000).toFixed(0),
            requestedBy :  '',
            notaryId : 73,
            projectedActId : 0,
            projectedOwner : ''
        };
        return pendingNoteRequest;
}

private showOnlineTransactionMessage(onlineTransaction: OnlineTransaction): void {
        let transationRequest = "Número de Transacción: " + onlineTransaction.externalTransactionNo + "\n" +
            "Fecha de presentación: " + onlineTransaction.presentationTime + "\n" +
            "Folio real:            " + onlineTransaction.realPropertyUID + "\n" +
            "Solicitado por:        " + onlineTransaction.requestedBy + "\n" +
            "Status atcual:         " + onlineTransaction.status + "\n" +
            "Uid:                   " + onlineTransaction.uid;
        this.messageBox.showMessage("La solicitud de aviso preventivo se creó satistactoriamente. \n" +
                                            transationRequest);
        }
}
