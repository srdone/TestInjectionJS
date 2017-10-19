import { Injectable } from 'injection-js'

@Injectable()
export class Engine {

	start() {
		console.log('My engine started!');
	}

}

