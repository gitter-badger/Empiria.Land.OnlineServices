/**
 *  Solution : Empiria Land Online Services                  || v0.1.0328
 *  Type     : ConfigData
 *  Summary  : Internal type used to hold aplication configuration data.
 *
 *  Copyright (c) 2015-2016. Ontica LLC, La Vía Óntica SC and contributors. <http://ontica.org>
*/

import {SettingsData} from "empiria/settings";
import {DataOperationDef} from "empiria/data.operation";

const TESTS_SERVER = "http://empiria.land.testing/testing.webapi/";
const TESTS_API_KEY = "kSVewfgU5WGgz3mSSM2YSQAUwa3W67MhgfR7qBtWmFWcZ89hTPWnNuPnGHgGA6YG";

const DATA_OPERATIONS: DataOperationDef[] = [
  { "uid" : "getSystemLicense",
    "url": "v1/system/license",
    "async": false,
    "crossDomain": true,
    "method": "GET"
  },
  { "uid" : "getLandCertificate",
    "url": "v1/certificates/{0}",
    "async": false,
    "crossDomain": true,
    "method": "GET"
  },
  { "uid" : "getLandCertificateText",
    "url": "v1/certificates/{0}/as-text",
    "async": false,
    "crossDomain": true,
    "method": "GET"
  },
  { "uid" : "createLandCertificate",
  "url": "v1/certificates",
  "async": false,
  "crossDomain": true,
  "method": "POST"
  },
  { "uid" : "updateLandCertificate",
  "url": "v1/certificates/{0}",
  "async": false,
  "crossDomain": true,
  "method": "PUT"
  },
  { "uid" : "closeLandCertificate",
  "url": "v1/certificates/{0}/close",
  "async": false,
  "crossDomain": true,
  "method": "POST"
  },
  { "uid" : "openLandCertificate",
  "url": "v1/certificates/{0}/open",
  "async": false,
  "crossDomain": true,
  "method": "POST"
  },
  { "uid" : "deleteLandCertificate",
  "url": "v1/certificates/{0}",
  "async": false,
  "crossDomain": true,
  "method": "DELETE"
  },
  { "uid" : "existsLandProperty",
  "url": "v1/properties/{0}",
  "async": false,
  "crossDomain": true,
  "method": "GET"
  },
  { "uid" : "getPropertyAsHTML",
  "url": "v1/properties/{0}/as-html",
  "async": false,
  "crossDomain": true,
  "method": "GET"
  },
   { "uid" : "requestPendingNoteRecording",
  "url": "v1/transactions/request-pending-note-recording",
  "async": false,
  "crossDomain": true,
  "method": "POST"
  },
  { "uid" : "requestCertificate",
  "url": "v1/transactions/request-certificate",
  "async": false,
  "crossDomain": true,
  "method": "POST"
  },
  { "uid" : "requestPendingNoteRecording",
  "url": "v1/transactions/request-pending-note-recording",
  "async": false,
  "crossDomain": true,
  "method": "POST"
  }
];   // END

export const APP_SETTINGS: SettingsData = {
  "defaultServer": TESTS_SERVER,
  "apiKey": TESTS_API_KEY,
  "dataOperations": DATA_OPERATIONS
};

export const TEST_SESSION_TOKEN = "caea3cfc-7eb3-4be9-8487-467513381e0b-" +
       "50d9483cd3d114c9d3cae641cd5c889499d5fb54d5f42c11b7c6766710dba57e";

export const VALID_PROPERTY_UID = "TL72-F3K6-AC9H-5Z1Q";

export const VALID_CERTIFICATE_UID = "CE37YZ-29MA47-KJ82HF";
