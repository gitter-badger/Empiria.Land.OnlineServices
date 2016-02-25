# Introduction

Empiria Land Online Services is an e-government solution for Land Recording Offices, that
offers public services and transactions to citizens and notaries. Some of these services are:
land certificates emission, requests of documents copies and deeds registration, electronic
seals validation, and real estate properties searching.

This project is based on Angular 2.0 and TypeScript 1.7.

# How to start

**Note** this project requires node v4.x.x or higher and npm 2.14.7.

You must have `ts-node` installed as global. If you don't, use:

```bash
npm install -g ts-node
```

In order to start use:
```bash

git clone https://github.com/Ontica/Empiria.Land.OnlineServices
cd Empiria.Land.OnlineServices
npm install       # or `npm run reinstall` if you get an error
npm start         # start with --env dev
```

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm run start -- --port 8080 --reload-port 4000 --base /my-app/
```

# License

GNU AFFERO GENERAL PUBLIC LICENSE
