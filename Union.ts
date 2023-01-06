const message: string | number = 5;
const messages: string[] | number[] = ["1", "2"];

// function printMsg(msg: string | number): void {
// 	if (typeof msg === "string") {
// 		console.log(msg.toUpperCase());
// 	} else {
// 		console.log(msg.toExponential());
// 	}
// }

function printMsg(msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach((m) => console.log("array", m));
	} else if (typeof msg === "number") {
		console.log("number", msg.toFixed());
	} else {
		console.log("boolean", msg);
	}
}

printMsg(2);
printMsg(["2", "1", "5"]);
printMsg(true);

function printReadings(a: number | string, b: number | boolean): void {
	if (a === b) {
		console.log("number", a, b);
	}
}

function checkReadings(
	readings: { system: number } | { userId: number }
): void {
	if ("system" in readings) {
		console.log("value in object", readings.system);
	} else {
		console.log(readings.userId);
	}
}

function logValue(a: string | Date) {
	if (a instanceof Date) {
		console.log("date", a.getDate());
	} else {
		console.log("string", a);
	}
}
