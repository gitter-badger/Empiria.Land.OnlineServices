import {Component, ViewChild} from 'angular2/core';
import {OnlineServices, CertificateRequest, OnlineTransaction} from 'empiria-land/online.services';
import {MessageBox} from '../windows/message-box';

@Component({
  selector: 'get-certificate-data',
  templateUrl: './components/certificate-request/get-certificate-data.html',
  directives: [MessageBox]
})

export class GetCertificateDataCmp {
    public generalRequest: {propertyUID: string,
                                     requestedBy: string,
                                     certificateType: string} = {propertyUID: "",
                                     requestedBy: "",
                                     certificateType: ""};
    @ViewChild(MessageBox) public messageBox: MessageBox;

    public searchProperty(): void {
        try {
            if (!this.isValidProperty(this.generalRequest.propertyUID)) {
                return;
            }
            this.messageBox.showMessage(OnlineServices.getPropertyAsHtml(this.generalRequest.propertyUID));
           return;
        } catch (e) {
            this.messageBox.showException(e);
        }
    }

    public requestCerficate(): void {
        try {
            if (!this.validateCertificateRequest() ) {
                return;
            }
            let certificateRequest = this.getCertificateRequest();
            let onlineTransaction = this.getOnlineTransaction(certificateRequest);
            this.showOnlineTransactionMessage(onlineTransaction);
        } catch (e) {
            this.messageBox.showException(e);
        }
    }

    private getCertificateRequest(): CertificateRequest {
        let certificateRequest: CertificateRequest = {
                certificateType : parseInt (this.generalRequest.certificateType, 10),
                realPropertyUID :  this.generalRequest.propertyUID,
                externalTransactionNo: (Math.random() * 1000000).toFixed(0),
                externalTransactionTime : new Date('2016-01-01'),
                paymentAmount : 160,
                paymentReceiptNo : '4309B',
                requestedBy :  this.generalRequest.requestedBy
            };
        return certificateRequest;
    }

    private getOnlineTransaction(certificateRequest: CertificateRequest): OnlineTransaction {
        return OnlineServices.requestCertificate(certificateRequest);
    }

    private showOnlineTransactionMessage(onlineTransaction: OnlineTransaction): void {
        let transationRequest = "Número de Transacción: " + onlineTransaction.externalTransactionNo + "\n" +
                                 "Fecha de presentación: " + onlineTransaction.presentationTime + "\n" +
                                 "Folio real:            " + onlineTransaction.realPropertyUID + "\n" +
                                 "Solicitado por:        " + onlineTransaction.requestedBy + "\n" +
                                 "Status atcual:         " + onlineTransaction.status + "\n" +
                                 "Uid:                   " + onlineTransaction.uid;
        this.messageBox.showMessage("La solicitud de certificado se creó satistactoriamente. \n" +
                                     transationRequest);
    }

    private validateCertificateRequest(): boolean {
        if (!this.hasValue(this.generalRequest.certificateType)) {
            this.messageBox.showMessage("Requiero se seleccione de la lista el tipo " +
                                        "de certificado que se solicita.");
            return false;
        }
        if (!this.hasValue(this.generalRequest.requestedBy)) {
            this.messageBox.showMessage("Necesito conocer el nombre del solicitante.");
            return false;
        }
        if (!this.isValidProperty(this.generalRequest.propertyUID)) {
            return false;
        }
        return true;
    }

    private hasValue(value: string): boolean {
        if ((value === null) || (value === undefined) || (value.length === 0)) {
            return false;
        }
        return true;
    }

    private isValidProperty(propertyUID: string): boolean {
        if (!this.hasValue(propertyUID)) {
            this.messageBox.showMessage('Requiero se proporcione el folio real del predio.');
            return false;
        }
        if (!OnlineServices.existsProperty(this.generalRequest.propertyUID)) {
            this.messageBox.showMessage("No encontré ningún predio registrado con el folio real "  +
                            this.generalRequest.propertyUID + ".");
            return false;
        }
        return true;
    }

   // TL72-F3K6-AC9H-5Z1Q
}
