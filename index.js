"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const injection_js_1 = require("injection-js");
const car_1 = require("./car");
const engine_1 = require("./engine");
const injector = injection_js_1.ReflectiveInjector.resolveAndCreate([
    car_1.Car,
    engine_1.Engine
]);
injector.get(car_1.Car).start();
//# sourceMappingURL=index.js.map