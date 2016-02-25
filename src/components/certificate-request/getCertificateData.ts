import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {OnlineServices, CertificateRequest} from 'empiria-land/online.services';
@Component({
  selector: 'get-certificate-data',
  templateUrl: './components/certificate-request/get-certificate-data.html',
  directives: [MATERIAL_DIRECTIVES]
})

export class GetCertificateDataCmp {
  public propertyUID: string = "";
  public requestedBy: string = "";
  public certificateType: string = "";

  public searchProperty(): void {
    if (!this.isValidProperty(this.propertyUID)) {
      return;
    }
    alert(OnlineServices.getPropertyAsHtml(this.propertyUID));
    return;
  }

  public requestCerficate(): void {
    if (!this.validateCertificateRequest()) {
      return;
    }

    let certificateRequest: CertificateRequest = {
      certificateType : parseInt (this.certificateType, 10),
      realPropertyUID :  this.propertyUID,
      externalTransactionNo: (Math.random() * 1000000).toFixed(0),
      externalTransactionTime : new Date('2016-01-01'),
      paymentAmount : 160,
      paymentReceiptNo : '4309B',
      requestedBy : this.requestedBy
    };
    console.log(certificateRequest);
    let onlineTransaction = OnlineServices.requestCertificate(certificateRequest);
    console.log(onlineTransaction);
    alert("La solicitud de certificado se creó satistactoriamente.");
  }

  private validateCertificateRequest(): boolean {
    if (!this.hasValue(this.certificateType)) {
        alert("Requiero se seleccione de la lista el tipo de certificado que se solicita.");
        return false;
    }
    if (!this.hasValue(this.requestedBy)) {
      alert("Necesito conocer el nombre del solicitante.");
      return false;
    }
    if (!this.isValidProperty(this.propertyUID)) {
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
      alert('Requiero se proporcione el folio real del predio.');
      return false;
    }
    if (!OnlineServices.existsProperty(this.propertyUID)) {
      alert("No encontré ningún predio registrado con el folio real " + this.propertyUID + ".");
      return false;
    }
    return true;
  }

}
