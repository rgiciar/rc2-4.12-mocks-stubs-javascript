export class Clock {
	isMorning() {
		const now = new Date();
		return now.getHours() < 12;
	}

	getCurrentTime() {
		const now = new Date();
		return now.toLocaleTimeString();
	}
}