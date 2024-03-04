import { Clock } from "./Clock";

export class Greeter {
    // "greet" = "saludar"
	constructor() {
		this.clock = new Clock();
	}
    
	greet(name) {
		if (this.clock.isMorning()) {
			return `Buenos días, ${name}`;
		}

		return `Ya son las ${this.clock.getCurrentTime()}, ${name}`;
	}
}