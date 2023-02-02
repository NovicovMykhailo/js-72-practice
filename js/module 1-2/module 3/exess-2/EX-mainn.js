// ## Example 6 - Операция rest

// Напиши функцию `transformUsername(user)` так, чтобы она возвращала новый обьект
// со свойством `fullName`, вместо `firstName` и `lastName`.

// transformUsername(user){
//   return {

//   }
// }

// ```js
// // Решение
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );
// ```

const users = [
	{
		name: "Moore Hensley",
		email: "moorehensley@indexia.com",
		eyeColor: "blue",
		friends: ["Sharron Pace"],
		isActive: false,
		balance: 2811,
		gender: "male",
	},
	{
		name: "Sharlene Bush",
		email: "sharlenebush@tubesys.com",
		eyeColor: "blue",
		friends: ["Briana Decker", "Sharron Pace"],
		isActive: true,
		balance: 3821,
		gender: "female",
	},
	{
		name: "Ross Vazquez",
		email: "rossvazquez@xinware.com",
		eyeColor: "green",
		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
		isActive: false,
		balance: 3793,
		gender: "male",
	},
	{
		name: "Elma Head",
		email: "elmahead@omatom.com",
		eyeColor: "green",
		friends: ["Goldie Gentry", "Aisha Tran"],
		isActive: true,
		balance: 2278,
		gender: "female",
	},
	{
		name: "Carey Barr",
		email: "careybarr@nurali.com",
		eyeColor: "blue",
		friends: ["Jordan Sampson", "Eddie Strong"],
		isActive: true,
		balance: 3951,
		gender: "male",
	},
	{
		name: "Blackburn Dotson",
		email: "blackburndotson@furnigeer.com",
		eyeColor: "brown",
		friends: ["Jacklyn Lucas", "Linda Chapman"],
		isActive: false,
		balance: 1498,
		gender: "male",
	},
	{
		name: "Sheree Anthony",
		email: "shereeanthony@kog.com",
		eyeColor: "brown",
		friends: ["Goldie Gentry", "Briana Decker"],
		isActive: true,
		balance: 2764,
		gender: "female",
	},
];

// const getUsersWithEyeColor = (usersArray, color) => {
//   return usersArray.filter(user => user.eyeColor === color )

// };

// const getUsersWithFriend = (usersArray, friendName) => {
//   let usersFriends = usersArray.filter(a => a.friends)
//   return usersFriends}

// console.log(getUsersWithFriend(users, "Goldie Gentry"))

//функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush и Carey Barr
//  "green", //функция возвращает массив объектов пользователей с именами Ross Vazquez и Elma Head
//  "brown", //функция возвращает массив объектов пользователей с именами Blackburn Dotson и Sheree Anthony

const getFriends = users => {
	// const flatArray = users.flatMap(user => {
	//   return user.friends})

	//   let newArray = flatArray.filter((friend, index,array) => array.indexOf(friend) === index )
	//   return newArray
	users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
};

console.table(getFriends(users));
// ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh",
// "Padilla Garrison", "Naomi Buckner", "Goldie Gentry",
//  "Aisha Tran", "Jordan Sampson", "Eddie Strong",
// "Jacklyn Lucas", "Linda Chapman"]
