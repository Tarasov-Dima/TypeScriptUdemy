import { port3000, port3001 } from "./literalTypes";
interface IConfig {
	protocol: "http" | "https";
	port: 3000 | 3001;
	log: (msg: string) => void;
}
interface IRole {
	role: string;
}

interface IConfigRole extends IConfig, IRole {}

const serverConfigInt: IConfigRole = {
	protocol: "https",
	port: 3000,
	role: "admin",
	log: (msg: string): void => console.log(msg),
};

type IStartFunction = (
	protocol: "http" | "https",
	port: 3000 | 3001,
	log: (msg: string) => void
) => string;

const IStartServer: IStartFunction = (
	protocol: "http" | "https",
	port: 3000 | 3001,
	log: (msg: string) => void
): "server started " => {
	if (port === port3000 || port === port3001) {
		log(`Server started  on ${protocol}://server:${port}`);
	}
	return "server started ";
};
IStartServer(
	serverConfigInt.protocol,
	serverConfigInt.port,
	serverConfigInt.log
);
