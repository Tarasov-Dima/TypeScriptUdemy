function processingDataGen<T, S>(data: T[], options: S): string {
	data.length;
	switch (typeof data) {
		case "string":
			return `${data}, speed:${options}`;
		case "number":
			return `${data[0]}, speed:${options}`;
		default:
			return "not valid";
	}
}

const ress = processingDataGen([1], "fast");
const res2s = processingDataGen(["1"], "slow");

const ress3 = processingDataGen<number, string>([10], "test");

function processing<T>(data: T): T {
	return data;
}

interface ProcessingFn {
	<T>(data: T): T;
}
let newFn: ProcessingFn = processing;

interface DataSaver {
	// processing: <T>(data: T) => T;
	processing: typeof processing;
}

const saver: DataSaver = {
	// processing(data) {
	// 	console.log(data);
	// 	return data;
	// },
	// processing: <T>(data: T) => {
	// 	console.log(data);
	// 	return data;
	// },
	processing: processing,
};
