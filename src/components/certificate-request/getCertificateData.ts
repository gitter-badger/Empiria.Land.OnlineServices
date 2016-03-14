import {Component, ViewChild} from 'angular2/core';
import {OnlineServices, CertificateRequest, OnlineTransaction} from 'empiria-land/online.services';
import {MessageBox} from '../windows/message-box';
import {Validate} from '../validate/generalValidate';

@Component({
  selector: 'get-certificate-data',
  templateUrl: './components/certificate-request/get-certificate-data.html',
  directives: [MessageBox]
})

export class GetCertificateDataCmp {

    public certificateRequest: CertificateRequest = this.getNewCertificateRequest();
    @ViewChild(MessageBox) public messageBox: MessageBox;

    public searchProperty(): void {
        try {
            if (!this.validateProperty(this.certificateRequest.realPropertyUID)) {
                return;
            }
            let propertyHtml = OnlineServices.getPropertyAsHtml(this.certificateRequest.realPropertyUID);
            this.messageBox.showMessage(propertyHtml);
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
            let onlineTransaction = OnlineServices.requestCertificate(this.certificateRequest);
            this.showOnlineTransactionMessage(onlineTransaction);
        } catch (e) {
            this.messageBox.showException(e);
        }
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

    private validateProperty(propertyUID: string): boolean {
        if (!Validate.hasValue(propertyUID)) {
            this.messageBox.showMessage('Requiero se proporcione el folio real del predio.');
            return false;
        }
        if (!OnlineServices.existsProperty(propertyUID)) {
            this.messageBox.showMessage("No encontró ningún predio registrado con el folio real "  +
                            propertyUID + ".");
            return false;
        }
        return true;
    }

    private validateCertificateRequest(): boolean {
        if (!Validate.hasValue(this.certificateRequest.certificateType.toString())) {
            this.messageBox.showMessage("Requiero se seleccione de la lista el tipo " +
                                        "de certificado que se solicita.");
            return false;
        }
        if (!Validate.hasValue(this.certificateRequest.requestedBy)) {
            this.messageBox.showMessage("Necesito conocer el nombre del solicitante.");
            return false;
        }
        if (!this.validateProperty(this.certificateRequest.realPropertyUID)) {
            return false;
        }
        return true;
    }

    private getNewCertificateRequest(): CertificateRequest {
        let certificateRequest: CertificateRequest = {
                certificateType : 0,
                realPropertyUID :  '',
                externalTransactionNo: (Math.random() * 1000000).toFixed(0),
                externalTransactionTime : new Date('2016-01-01'),
                paymentAmount : 160,
                paymentReceiptNo : '4309B',
                requestedBy :  ''
            };
        return certificateRequest;
    }

   // TL72-F3K6-AC9H-5Z1Q
}
