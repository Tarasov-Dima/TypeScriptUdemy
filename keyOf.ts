interface ICompany {
	name: string;
	debts: number;
}

type CompanyKeys = keyof ICompany;

const keys: CompanyKeys = "debts";

function printDebts<T, K extends keyof T, S extends keyof T>(
	company: T,
	name: K,
	debts: S
) {
	console.log(`Company name: ${company[name]}, debts: ${company[debts]}`);
}

const hh: ICompany = {
	name: "HH",
	debts: 3213,
};

printDebts(hh, "name", "debts");

const google: ICompany = {
	name: "google",
	debts: 5000000,
};

type GoogleKeys = keyof typeof google;
