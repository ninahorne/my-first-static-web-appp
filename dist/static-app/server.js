"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("zone.js/dist/zone-node");
const express_engine_1 = require("@nguniversal/express-engine");
const express = require("express");
const path_1 = require("path");
const main_server_1 = require("./src/main.server");
const common_1 = require("@angular/common");
const fs_1 = require("fs");
// The Express app is exported so that it can be used by serverless Functions.
function app() {
    const server = express();
    const distFolder = path_1.join(process.cwd(), 'dist/static-app/browser');
    const indexHtml = fs_1.existsSync(path_1.join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
    // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
    server.engine('html', express_engine_1.ngExpressEngine({
        bootstrap: main_server_1.AppServerModule,
    }));
    server.set('view engine', 'html');
    server.set('views', distFolder);
    // Example Express Rest API endpoints
    // server.get('/api/**', (req, res) => { });
    // Serve static files from /browser
    server.get('*.*', express.static(distFolder, {
        maxAge: '1y'
    }));
    // All regular routes use the Universal engine
    server.get('*', (req, res) => {
        res.render(indexHtml, { req, providers: [{ provide: common_1.APP_BASE_HREF, useValue: req.baseUrl }] });
    });
    return server;
}
exports.app = app;
function run() {
    const port = process.env.PORT || 4000;
    // Start up the Node server
    const server = app();
    server.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
    run();
}
__exportStar(require("./src/main.server"), exports);
//# sourceMappingURL=server.js.map