"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const tasks_component_1 = require("./tasks.component");
describe('UsersComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [tasks_component_1.TasksComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(tasks_component_1.TasksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tasks.component.spec.js.map