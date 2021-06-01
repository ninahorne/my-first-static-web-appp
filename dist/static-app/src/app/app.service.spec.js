"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const app_service_1 = require("./app.service");
describe('AppService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(app_service_1.AppService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=app.service.spec.js.map