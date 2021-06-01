"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderModuleFactory = exports.renderModule = exports.AppServerModule = void 0;
/***************************************************************************************************
 * Initialize the server environment - for example, adding DOM built-in types to the global scope.
 *
 * NOTE:
 * This import must come before any imports (direct or transitive) that rely on DOM built-ins being
 * available, such as `@angular/elements`.
 */
require("@angular/platform-server/init");
const core_1 = require("@angular/core");
const environment_1 = require("./environments/environment");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var app_server_module_1 = require("./app/app.server.module");
Object.defineProperty(exports, "AppServerModule", { enumerable: true, get: function () { return app_server_module_1.AppServerModule; } });
var platform_server_1 = require("@angular/platform-server");
Object.defineProperty(exports, "renderModule", { enumerable: true, get: function () { return platform_server_1.renderModule; } });
Object.defineProperty(exports, "renderModuleFactory", { enumerable: true, get: function () { return platform_server_1.renderModuleFactory; } });
//# sourceMappingURL=main.server.js.map