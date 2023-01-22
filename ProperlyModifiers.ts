interface IUser {
	readonly login: string;
	password: string;
	age: number;
	parents?: {
		mother?: string;
		father?: string;
	};
}

const user: IUser = {
	login: "admin",
	password: "admin",
	age: 30,
	parents: { father: "Joe" },
};

const userFreeze: Readonly<IUser> = {
	login: "admin",
	password: "admin",
	age: 30,
	parents: { father: "Joe" },
};

const basicPorts: readonly number[] = [5000, 5002, 5555];
//error
// basicPorts[1] = 3;

let randomString: string;
sendUserData(user, "testsdwa");

console.log(randomString!);

function sendUserData(obj: IUser, db?: string): void {
	randomString = "dawdwagrer";
	console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase());
}
