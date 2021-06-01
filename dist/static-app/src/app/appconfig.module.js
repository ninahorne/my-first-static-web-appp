"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigModule = exports.init_app = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const appconfig_service_1 = require("./appconfig.service");
function init_app(appConfigService) {
    return () => appConfigService.load();
}
exports.init_app = init_app;
let AppConfigModule = class AppConfigModule {
};
AppConfigModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpClientModule],
        providers: [
            appconfig_service_1.AppConfigService,
            { provide: core_1.APP_INITIALIZER, useFactory: init_app, deps: [appconfig_service_1.AppConfigService], multi: true }
        ]
    })
], AppConfigModule);
exports.AppConfigModule = AppConfigModule;
//# sourceMappingURL=appconfig.module.js.map