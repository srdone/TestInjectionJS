import { Injectable } from 'injection-js';
import { Engine } from './engine'

@Injectable()
export class Car {

	constructor(private engine: Engine){}

	start() {
		if (this.engine) {
			this.engine.start();
		} else {
			console.log('failed to start engine');
		}
	}

}
