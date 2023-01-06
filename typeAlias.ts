type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
type AnimationId = string | number;

function createAnimationWithAlias(
	id: AnimationId,
	animationName: string,
	timingFunction: AnimationTimingFunc = "ease",
	duration: number,
	iterCount: "infinite" | number
): void {
	// const element = document.querySelector(`#${id}`) as HTMLElement;

	console.log(`${animationName} ${timingFunction} ${duration} ${iterCount}`);
	// element.style.animation = `${animationName} ${timingFunction} ${duration} ${iterCount}`;
}

createAnimationWithAlias("id", "fade", "ease-in", 2000, "infinite");
