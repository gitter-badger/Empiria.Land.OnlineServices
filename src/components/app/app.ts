import {Component, ViewEncapsulation}     from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

import {GetPendingNoteDataCmp} from '../pending-note-request/getPendingNoteData';
import {GetCertificateDataCmp} from '../certificate-request/getCertificateData';

@Component({
  selector: 'app',
  viewProviders: [],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES]
})
@RouteConfig([
  { path: '/pending-note-request', component: GetPendingNoteDataCmp, as: 'PendingNoteRequest' },
  { path: '/certificate-request', component: GetCertificateDataCmp, as: 'CertificateRequest' }
])
export class AppCmp {}
