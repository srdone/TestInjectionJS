import 'reflect-metadata';
import { ReflectiveInjector } from 'injection-js';

import { Car } from './car';
import { Engine } from './engine';

const injector = ReflectiveInjector.resolveAndCreate([
	Car,
	Engine
]);

injector.get(Car).start();
