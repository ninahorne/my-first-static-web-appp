"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const app_routing_module_1 = require("./app-routing.module");
const http_1 = require("@angular/common/http");
const app_component_1 = require("./app.component");
const animations_1 = require("@angular/platform-browser/animations");
const header_component_1 = require("./header/header.component");
const tasks_component_1 = require("./tasks.component");
const modal_1 = require("ngx-bootstrap/modal");
const home_component_1 = require("./home/home.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            tasks_component_1.TasksComponent,
            home_component_1.HomeComponent
        ],
        imports: [
            platform_browser_1.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            app_routing_module_1.AppRoutingModule,
            animations_1.BrowserAnimationsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpClientModule,
            modal_1.ModalModule.forRoot()
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map