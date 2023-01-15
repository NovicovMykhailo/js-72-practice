// ## Example 12 - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
// результат в консоль браузера.

// - Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
// - Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
// - В противном случае вывести строку `"Я вас не знаю"`

// Пароль проверять так:

// - Если введён пароль `"Я админ"`, то вывести строку `"Здравствуйте!"`
// - Иначе выводить строку `"Неверный пароль"`

const login = prompt("Login");
const username = "Админ";
const password = "Я админ";
let message;
let userpass;

console.log(login);

if (login === username) {
	userpass = prompt("Введите пароль");
	message = userpass === password ? "Здравствуйте!" : "Неверный пароль";
	console.log(message);
} else if (login === null) {
	message = "Отменено";
	console.log(message);
} else {
	message = "Я вас не знаю";
	console.log(message);
}
