/**
 *  Solution : Empiria Land Online Services                  || v0.1.0328
 *  File     : Bootstraping methods
 *  Summary  : Contains bootstraping methods that should be called using
 *             System.import('bootstrap') inside the main index.html page.
 *
 *  Copyright (c) 2015-2016. Ontica LLC, La Vía Óntica SC and contributors. <http://ontica.org>
*/

// #region Angular bootstraping

import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppCmp} from './components/app/app';

bootstrap(AppCmp, [
  ROUTER_PROVIDERS, 
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);

// #endregion Angular bootstraping

// #region Empiria Bootstraping

import {Settings} from 'empiria/settings';
import {Session} from 'empiria/session';

import {APP_SETTINGS, TEST_SESSION_TOKEN} from "./empiria.config";

function empiriaBootstrap(): void {
  Settings.set(APP_SETTINGS);
  Session.setCurrent(TEST_SESSION_TOKEN);
}

empiriaBootstrap();

// #endregion Empiria Bootstraping
