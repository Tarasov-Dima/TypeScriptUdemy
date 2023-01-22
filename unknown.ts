let smth: unknown;

smth = "str";

let data: string[] = smth;

data.find((e) => e);

const someValue: unknown = 10;

someValue.toFix();

function fetchData(data: unknown): void {
	if (typeof data === "string") {
		console.log(data.toUpperCase());
	}
}
