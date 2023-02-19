// function isNumber(n: string[] | number | boolean): n is number {
// 	return typeof n === "number";
// }
function isNumber(n: unknown): n is number {
	return typeof n === "number";
}

interface Car {
	name: "car";
	engine: string;
	// wheels: number;
	wheels: {
		number: number;
		type: string;
	};
}
interface Ship {
	name: "ship";
	engine: string;
	sail: string;
}

interface Airplane {
	name: "airplane";
	engine: string;
	wings: string;
}
interface SuperAirplane {
	name: "random";
	engine: string;
	wings: string;
}
type Vehicle = Car | Ship | Airplane | SuperAirplane;

function repairVehicle(vehicle: Vehicle) {
	// if (isCar(vehicle)) {
	// 	console.log(vehicle.wheels);
	// } else if (isShip(vehicle)) {
	// 	console.log(vehicle.sail);
	// } else {
	// 	const smth: never = vehicle;
	// }
	switch (vehicle.name) {
		case "car":
			console.log(vehicle.wheels);
			break;
		case "airplane":
			console.log(vehicle.wings);
			break;
		case "ship":
			console.log(vehicle.sail);
			break;
		default:
			const smth: never = vehicle;
			console.log("nothing");
	}
}

function isCar(car: Vehicle): car is Car {
	// return "wheels" in car;
	return (car as Car).wheels.type !== undefined;
}

function isShip(ship: Vehicle): ship is Ship {
	return "sail" in ship;
	return (ship as Ship).sail !== undefined;
}
