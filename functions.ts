const userNameData: string = "Lala";
const userAgeData: number = 42;
const isBirthdayData: boolean = true;

function isBrtMsg(isBirthday: boolean, userAge: number, userName: string) {
  if (isBirthday) {
    console.log(`Hi ${userName}, age:${userAge + 1}`);
  }
}
isBrtMsg(isBirthdayData, userAgeData, userNameData);
