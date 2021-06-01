"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const core_1 = require("@angular/core");
let AppService = class AppService {
    constructor(http) {
        this.http = http;
        this.rootURL = 'https://';
    }
    setTask(task) {
        this.task = task;
    }
    getTask() {
        return this.task;
    }
    getTasks() {
        return this.http.get(this.rootURL + '/todos');
    }
    addTask(task) {
        return this.http.post(this.rootURL + '/todos', { task });
    }
    editTask(task) {
        return this.http.put(this.rootURL + '/todo', { task });
    }
    deleteTask(taskId) {
        console.log('deleting task:::', taskId);
        return this.http.delete(`${this.rootURL}/todo/${taskId}`);
    }
    getSettings(url) {
        return this.http.get(this.rootURL + '/' + url);
    }
};
AppService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map