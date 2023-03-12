class UserC<T, S> {
	name: T;
	ageC: S;

	constructor(name: T, ageC: S) {
		this.name = name;
		this.ageC = ageC;
	}

	sayMyFullName<T>(surname: T): string {
		if (typeof surname !== "string") {
			return `I have only name: ${this.name}`;
		}
		return `${this.name} ${surname}`;
	}
}
class AdminUser extends UserC<string, number> {}
const den = new UserC("Den", 25);

console.log(den.sayMyFullName("Zubko"));

const nameData = "Alex";
const ageData = 32;

const alex = new UserC<string, number>(nameData, ageData);
