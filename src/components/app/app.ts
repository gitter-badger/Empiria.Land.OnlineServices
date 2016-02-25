import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

import {HomeCmp} from '../home/home';
import {AvisosPrevCmp} from '../avisos-preventivos1-3/AvisosPrev';
import {CertificatesCmp} from '../Certificados/Certificados';

@Component({
  selector: 'app',
  viewProviders: [],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES]
})
@RouteConfig([
  { path: '/home', component: HomeCmp, as: 'Home' },
  { path: '/AvisosPrev', component: AvisosPrevCmp, as: 'AvisosPrev' },
  { path: '/Certificados', component: CertificatesCmp, as: 'Certificados' }
])
export class AppCmp {}
