import {Component, ViewEncapsulation}     from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {GetPendingNoteDataCmp} from '../pending-note-request/getPendingNoteData';
import {GetCertificateDataCmp} from '../certificate-request/getCertificateData';
import {RegisterNewUserCmp} from '../user-registration/RegisterNewUser';
import {RegisterNewPasswordCmp} from '../user-registration/RegisterNewPassword';
import {LoginCmp} from '../user-registration/login';
import {RequestNewPasswordCmp} from '../user-registration/requestNewPassword';
import {GetPaymentDataCmp} from '../payment-request/getPaymentData';

@Component({
  selector: 'app',
  viewProviders: [],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/pending-note-request', component: GetPendingNoteDataCmp, as: 'PendingNoteRequest' },
  { path: '/certificate-request', component: GetCertificateDataCmp, as: 'CertificateRequest' },
  { path: '/register-new-user', component: RegisterNewUserCmp, as: 'RegisterNewUser' },
  { path: '/register-new-password', component: RegisterNewPasswordCmp, as: 'RegisterNewPassword' },
  { path: '/login', component: LoginCmp, as: 'Login' },
  { path: '/request-new-password', component: RequestNewPasswordCmp, as: 'RequestNewPassword'},
  { path: '/payment-request', component: GetPaymentDataCmp, as: 'PaymentRequest' }
])
export class AppCmp {}
