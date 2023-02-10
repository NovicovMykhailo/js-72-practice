// # Модуль 5. Занятие 10. Прототипы и классы
console.log("=======Модуль 5. Занятие 10. Прототипы и классы =======");

// ## Example 1 - Блоггер

// Напиши класс `Blogger` для создания обьекта блоггера со следующим свойствами:

// - `email` - почта, строка
// - `age` - возраст, число
// - `numberOfPosts` - кол-во постов, число
// - `topics` - массив тем на которых специализируется блоггер

// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод `getInfo()`, который, возвращает строку:
// `User ${почта} is ${возраст} years old and has ${кол-во постов} posts`.

// Добавь метод `updatePostCount(value)`, который в параметре `value` принимает
// количество постов которые нужно добавить пользователю.
console.log("Example 1 - Блоггер =======");
console.log("");

class Blogger {
	constructor({ email, age, numberOfPosts, topics, name } = {}) {
		this.email = email;
		this.age = age;
		this.numberOfPosts = numberOfPosts;
		this.topics = topics;
		this.name = name;
	}
	getInfo() {
		return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
	}
	updatePostCount(value) {
		this.numberOfPosts += value;
		console.log(`user ${this.name}  ${this.email} add ${value} posts`);
	}
}

const mango1 = new Blogger({
	email: "mango@mail.com",
	name: "Mango",
	age: 24,
	numberOfPosts: 20,
	topics: ["tech", "cooking"],
});
console.log(mango1.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
mango1.updatePostCount(5);
console.log(mango1.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly1 = new Blogger({
	email: "poly@mail.com",
	name: "Poly",
	age: 19,
	numberOfPosts: 17,
	topics: ["sports", "gaming", "health"],
});
console.log(poly1.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
poly1.updatePostCount(4);
console.log(poly1.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// ## Example 2 - Хранилище
console.log("");
console.log("Example 2 - Хранилище =======");
console.log("");

// Напиши класс `Storage` который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать
// его в свойство `items`.

// Добавь методы класса:

// - `getItems()` - возвращает массив товаров.
// - `addItem(item)` - получает новый товар и добавляет его к текущим.
// - `removeItem(item)` - получает товар и, если он есть, удаляет его из текущих.
class Storage {
	constructor(item = []) {
		this.items = item;
	}
	getItems() {
		return this.items;
	}
	addItem(item) {
		this.items.push(item);
	}
	removeItem(item) {
		if (this.items.includes(item)) {
			console.log(` this ${item} will be removed`)
			this.items.splice(this.items.indexOf(item), 1);
		}
		return;
	}
}

const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

const items = storage.getItems();
console.log(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem("🍌");
console.log(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
console.log(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// ## Example 3 - User

// Напиши класс `User` который создаёт объект со свойствами `login` и `email`.
// Объяви приватные свойства `#login` и `#email`, доступ к которым сделай через
// геттер и сеттер `login` и `email`.

class User{
	#login;
	#email;
	constructor({email, login} ={}){
		this.email = email;
		this.login = login;
	}
	get login(){
		return this.#login
	}
	set login(login){
		this.#login = login
	}
	get email(){
		return this.#email
	}
	set email(email){
		this.#email = email
	}
}


const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie
\


// ## Example 4 - Заметки

// Напиши класс `Notes` который управляет коллекцией заметок в свойстве `items`.
// Заметка это объект со свойствами `text` и `priority`. Добавь классу статическое
// свойство `Priority`, в котором будет храниться объект с приоритетами.

// ```js
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// ```

// Добавь методы `addNote(note)`, `removeNote(text)` и
// `updatePriority(text, newPriority)`.

// ```js
// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);
// ```

// ## Example 5 - Toggle

// Напишите класс `Toggle` который принимает объект настроек `{isOpen: boolean}` и
// объявляет одно свойство `on` - состояние вкл/выкл (true/false). По умолчанию
// значение свойства `on` должно быть `false`.

// ```js
// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
// ```

// class User {
// 	email;

// 	constructor(email) {
// 		this.email = email;
// 	}

// 	get email() {
// 		return this.email;
// 	}

// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }
// class Admin extends User {
// 	// Change code below this line

// 	static AccessLevel = {
// 		BASIC: "basic",
// 		SUPERUSER: "superuser",
// 	};

// 	blacklistedEmails = [];

// 	blacklist(email) {
// 		this.blacklistedEmails.push(email);
// 	}

// 	isBlacklisted(email) {
// 		for (let el of this.blacklistedEmails) {
// 			if (email === el) {
// 				return true;
// 			}
// 			return false;
// 		}
// 	}

// 	constructor({ email, accessLevel }) {
// 		super(email);
// 		this.accessLevel = accessLevel;
// 	}

// 	// Change code above this line
// }

// const mango = new Admin({
// 	email: "mango@mail.com",
// 	accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

/*
  * Объявлен класс Admin
	Класс Admin наследует от класса User
	У класса Admin есть публичное свойство blacklistedEmails
	У класса Admin есть публичный метод blacklist
	У класса Admin есть публичный метод isBlacklisted
	После вызова mango.blacklist("poly@mail.com") значение 
	свойства blacklistedEmails это массив ["poly@mail.com"]
	Вызов mango.isBlacklisted("mango@mail.com") возвращает false
	Вызов mango.isBlacklisted("poly@mail.com") возвращает true
  */

/*
	*Добавь классу Admin следующие свойства и методы.

	Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
	Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
	Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
	После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.


	*/
