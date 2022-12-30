const departments: string[] = ["dev", "design", "marketing"];
const numbers: number[] = [1, 2, 4, 5];

const matrixNumberArray: number[][] = [
	[1, 5, 7],
	[5, 2, 4],
];

const report = departments
	.filter((d: string) => d !== "marketing")
	.map((d: string) => `${d} - working`);
console.log(report);
