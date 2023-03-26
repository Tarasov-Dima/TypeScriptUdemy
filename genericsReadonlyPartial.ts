const arrr: Array<number> = [1, 2, 3];
const arrr2: number[] = [1, 4, 2];

const roarr: ReadonlyArray<string> = ["dawdaw", "dwa"];

interface IState {
	data: {
		name: string;
	};
	tag?: string;
}

const state: Partial<IState> = {
	data: {
		name: "John",
	},
};
const strictState: Required<IState> = {
	data: {
		name: "John",
	},
	tag: "Test",
};
function action(state: Readonly<IState>) {
	state.data = "daw";
	state.data.name = "abs";
}
