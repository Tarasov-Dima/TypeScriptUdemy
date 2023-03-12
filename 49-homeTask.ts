// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface Player<Game, Hours> {
	game: Game;
	server: string;
	hours: Hours;
}
const player1: Player<string, number> = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2: Player<number, string> = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3: Player<string, { total: number; inMenu: number }> = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

type FigureName = "rect" | "triangle" | "line" | "circle";

interface Figure {
	name: FigureName;
	data?: object;
}

function calculateAmountOfFigures(figure: Figure[]): AmountOfFigures {
	function setObjectsValue(
		name: keyof AmountOfFigures,
		object: AmountOfFigures
	): Object {
		return (object[name] = object[name] ? object[name] + 1 : 1);
	}

	return figure.reduce((total, item) => {
		const { name } = item;
		if (name === "rect") {
			setObjectsValue("squares", total);
		} else if (name === "triangle") {
			setObjectsValue("triangles", total);
		} else if (name === "circle") {
			setObjectsValue("circles", total);
		} else {
			setObjectsValue("others", total);
		}
		// grouped by key and calculated by name
		// return total[name] = total.hasOwnProperty(name) ? total[name] + 1 : 1;
		return total;
	}, {} as AmountOfFigures);
}

const genericData: Figure[] = [
	{
		name: "rect",
		data: { a: 5, b: 10 },
	},
	{
		name: "rect",
		data: { a: 6, b: 11 },
	},
	{
		name: "triangle",
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: "line",
		data: { l: 15 },
	},
	{
		name: "circle",
		data: { r: 10 },
	},

	{
		name: "triangle",
	},
];

console.log(calculateAmountOfFigures(genericData));
