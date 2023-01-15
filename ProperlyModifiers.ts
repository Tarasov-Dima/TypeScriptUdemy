interface IUser {
	login: string;
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
};
