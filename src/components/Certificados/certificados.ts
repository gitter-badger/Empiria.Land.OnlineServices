import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {OnlineServices, CertificateRequest, OnlineTransaction} from 'empiria-land/online.services';
@Component({
  selector: 'certificates',
  templateUrl: './components/certificados/certificados.html',
  directives: [MATERIAL_DIRECTIVES]
})

export class CertificatesCmp {
  public propertyUID: string = '';
  public requestedBy: string = '';
  public certificateType: string = '';

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
      // let currenteDate: Date = new Date() ;
      let onlineTransaction: OnlineTransaction;
      let certificateRequest: CertificateRequest = {
        certificateType : parseInt (this.certificateType, 10),
        realPropertyUID :  this.propertyUID,
        externalTransactionNo: (Math.random() * 1000000).toFixed(0),
        transactionType : 2,
        externalTransactionTime : new Date('2016-01-01'),
        paymentAmount : 160,
        paymentReceiptNo : '4309B',
        requestedBy : this.requestedBy
      };
       console.log(certificateRequest);
       onlineTransaction = OnlineServices.requestCertificate(certificateRequest);
       console.log(onlineTransaction);
      alert("El tramite del certificado asi creado exitosamente");
      return;
   }

   private validateCertificateRequest(): boolean {
     if (!this.hasValue(this.certificateType)) {
          alert("Selecciona de la lista de Certificados el tipo de certificados que deseas ");
          return false;
      }
      if (!this.hasValue(this.requestedBy)) {
           alert("El nombre del solicitante se encuentra en blanco ");
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
          alert('El folio del predio se encuentra en blanco ');
          return false;
      }
      if (!OnlineServices.existsProperty(this.propertyUID)) {
          alert("No existe predio asociado al folio real:" + this.propertyUID);
          return false;
      }
      return true;
   }
   // 'TL72-F3K6-AC9H-5Z1Q'



}
