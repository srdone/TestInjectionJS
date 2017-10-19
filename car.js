"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const injection_js_1 = require("injection-js");
const engine_1 = require("./engine");
let Car = class Car {
    constructor(engine) {
        this.engine = engine;
    }
    start() {
        if (this.engine) {
            this.engine.start();
        }
        else {
            console.log('failed to start engine');
        }
    }
};
Car = __decorate([
    injection_js_1.Injectable(),
    __metadata("design:paramtypes", [engine_1.Engine])
], Car);
exports.Car = Car;
//# sourceMappingURL=car.js.map