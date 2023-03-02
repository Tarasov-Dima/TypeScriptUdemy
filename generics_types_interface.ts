type Smth<T> = T;

const smtNum: Smth<number> = 5;
interface ParentsOfUser {
	mother: string;
	father: string;
}

interface User<ParentsData extends ParentsOfUser> {
	login: string;
	age: number;
	parents: ParentsData;
}

const smtUser: User<{ mother: string; father: string; married: boolean }> = {
	login: "str",
	age: 32,
	parents: { mother: "Anna", father: "noData", married: true },
};

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const rData: OneOrMany<number[]> = [4];

const depositMoney = <T extends number | string>(amount: T): T => {
	console.log(`req to server with amount: ${amount}`);
	return amount;
};

depositMoney(500);
depositMoney("500");
depositMoney(true);
