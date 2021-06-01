"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const detail_component_1 = require("./detail.component");
describe('DetailComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [detail_component_1.DetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(detail_component_1.DetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detail.component.spec.js.map