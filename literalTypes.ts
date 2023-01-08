let msg: "hello" = "hello";

export const port3000: number = 3000;
export const port3001: number = 3001;

type Config = { protocol: "http" | "https"; port: 3000 | 3001 };
type Role = {
	role: string;
};
type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
	protocol: "https",
	port: 3001,
	role: "admin",
};
type StartFunction = (protocol: "http" | "https", port: 3000 | 3001) => string;

const startServer: StartFunction = (
	protocol: "http" | "https",
	port: 3000 | 3001
): "server started " => {
	if (port === port3000 || port === port3001) {
		console.log(`Server started  on ${protocol}://server:${port}`);
	}
	return "server started ";
};

startServer(serverConfig.protocol, serverConfig.port);

function createAnimation(
	id: string | number,
	animationName: string,
	timingFunction: "ease" | "ease-out" | "ease-in" = "ease",
	duration: number,
	iterCount: "infinite" | number
): void {
	// const element = document.querySelector(`#${id}`) as HTMLElement;

	console.log(`${animationName} ${timingFunction} ${duration} ${iterCount}`);
	// element.style.animation = `${animationName} ${timingFunction} ${duration} ${iterCount}`;
}

createAnimation("id", "fade", "ease-in", 2000, "infinite");
