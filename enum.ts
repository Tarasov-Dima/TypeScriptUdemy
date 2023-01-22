enum Directions {
	TOP,
	RIGHT,
	LEFT,
	BOTTOM,
}
enum TimingFunction {
	EASE = "ease",
	EASE_IN = "ease-in",
	LINEAR = "linear",
}
const enum TimingFunc {
	EASE = 1,
	EASE_IN = 2,
	LINEAR = EASE * 4,
}

function frame(elem: string, dir: Directions, tFunction: TimingFunction): void {
	if ((dir = Directions.RIGHT)) {
		console.log(tFunction);
	}
}

frame("id", Directions.RIGHT, TimingFunction.LINEAR);
