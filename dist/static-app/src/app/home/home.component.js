"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
let HomeComponent = class HomeComponent {
    constructor(appService, appConfigService) {
        this.appService = appService;
        this.appConfigService = appConfigService;
        this.title = 'angular-nodejs-example';
        this.todoForm = new forms_1.FormGroup({
            task: new forms_1.FormControl('', forms_1.Validators.nullValidator && forms_1.Validators.required),
            assignee: new forms_1.FormControl('', forms_1.Validators.nullValidator && forms_1.Validators.required),
            status: new forms_1.FormControl('', forms_1.Validators.nullValidator && forms_1.Validators.required)
        });
        this.tasks = [];
        this.destroy$ = new rxjs_1.Subject();
    }
    onSubmit() {
        console.log(this.todoForm.value);
        this.appService.addTask(this.todoForm.value).pipe(operators_1.takeUntil(this.destroy$)).subscribe(data => {
            console.log('message::::', data);
            this.getTasks();
            this.todoForm.reset();
        });
    }
    deleteTask(taskid) {
        console.log('deleting this task:::', taskid);
        this.appService.deleteTask(taskid).pipe(operators_1.takeUntil(this.destroy$)).subscribe(data => {
            console.log('message::::', data);
            this.getTasks();
        });
    }
    editTask(task) {
        console.log('editing this task:::', task);
        this.appService.editTask(task).pipe(operators_1.takeUntil(this.destroy$)).subscribe(data => {
            console.log('message::::', data);
            this.getTasks();
        });
    }
    getTasks() {
        this.appService.getTasks().pipe(operators_1.takeUntil(this.destroy$)).subscribe((tasks) => {
            this.tasks = tasks;
        });
    }
    getAppSettings() {
        this.settings = this.appConfigService.settings;
    }
    ngOnInit() {
        this.getTasks();
        this.getAppSettings();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map