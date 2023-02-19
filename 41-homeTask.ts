type Animal = "cat" | "dog" | "bird";
enum AnimalStatus {
	Available = "available",
	NotAvailable = "not available",
}
interface AnimalData {
	animal: Animal;
	breed: string;
	sterilized?: string;
}
interface AnimalAvailableData extends AnimalData {
	location: string;
	age?: number;
}
interface AnimalUnavailableData {
	message: string;
	nextUpdateIn: Date;
}

interface AnimalAvailableResponse {
	status: AnimalStatus.Available;
	data: AnimalAvailableData;
}
interface AnimalUnavailableResponse {
	status: AnimalStatus.NotAvailable;
	data: AnimalUnavailableData;
}

type Res = AnimalAvailableResponse | AnimalUnavailableResponse;

function checkAnimalData(animal: AnimalAvailableResponse): AnimalAvailableData;
function checkAnimalData(noAnimal: AnimalUnavailableResponse): string;
function checkAnimalData(animal: Res) {
	if (animal.status === AnimalStatus.Available) {
		return animal.data;
	}
	return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
}
const animal1: AnimalAvailableResponse = {
	status: "available" as AnimalStatus.Available,
	data: {
		animal: "cat",
		breed: "dsfsdf",
		location: "Lviv",
		age: 10,
	},
};
const animal2: AnimalUnavailableResponse = {
	status: "not available" as AnimalStatus.NotAvailable,
	data: {
		message: "sorry",
		nextUpdateIn: new Date(),
	},
};
console.log(checkAnimalData(animal1));
console.log(checkAnimalData(animal2));
