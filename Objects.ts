const userData = {
	userName: "Lala",
	userAge: 42,
	isBirthday: true,
	messages: {
		error: "error",
	},
};

// function isBrtMsg(data: {
// 	isBirthday: boolean;
// 	userAge: number;
// 	userName: string;
// }): void {
// 	if (data.isBirthday) {
// 		console.log(`Hi ${data.userName}, age:${data.userAge + 1}`);
// 	}
// }

function isBrtMsg({
	isBirthday,
	userAge,
	userName,
	messages: { error },
}: {
	isBirthday: boolean;
	userAge: number;
	userName: string;
	messages: { error: string };
}): void {
	if (isBirthday) {
		console.log(`Hi ${userName}, age:${userAge + 1}`);
	} else {
		console.log(error);
	}
}

isBrtMsg(userData);
