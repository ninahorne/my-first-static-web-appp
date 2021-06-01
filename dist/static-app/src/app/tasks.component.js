"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let TasksComponent = class TasksComponent {
    constructor(modalService, route, router, appService) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.appService = appService;
        this.deleteTask = new core_1.EventEmitter();
        this.editTask = new core_1.EventEmitter();
        this.editForm = new forms_1.FormGroup({
            id: new forms_1.FormControl('', forms_1.Validators.nullValidator && forms_1.Validators.required),
            task: new forms_1.FormControl('', forms_1.Validators.nullValidator && forms_1.Validators.required),
            assignee: new forms_1.FormControl('', forms_1.Validators.nullValidator && forms_1.Validators.required),
            status: new forms_1.FormControl('', forms_1.Validators.nullValidator && forms_1.Validators.required)
        });
    }
    ngOnInit() {
    }
    gotoDetail(task) {
        localStorage.setItem('task', JSON.stringify(task));
        this.router.navigate(['detail']);
    }
    onSubmit() {
        console.log(this.editForm.value);
        this.modalService.hide(1);
        this.editTask.emit(this.editForm.value);
    }
    delTask(task) {
        this.deleteTask.emit(task);
    }
    openModal(template, task) {
        this.editingId = task.id;
        this.editForm.setValue({ id: task.id, task: task.task, assignee: task.assignee, status: task.status });
        this.modalRef = this.modalService.show(template);
    }
};
__decorate([
    core_1.Input()
], TasksComponent.prototype, "tasks", void 0);
__decorate([
    core_1.Output()
], TasksComponent.prototype, "deleteTask", void 0);
__decorate([
    core_1.Output()
], TasksComponent.prototype, "editTask", void 0);
TasksComponent = __decorate([
    core_1.Component({
        selector: 'app-tasks',
        templateUrl: './tasks.component.html',
        styleUrls: ['./tasks.component.css']
    })
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map