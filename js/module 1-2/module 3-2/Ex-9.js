// ## Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)

// Напишите функции для работы с коллекцией обучающих курсов `courses`:

// - `addCourse(name)` - добавляет курс в конец коллекции
// - `removeCourse(name)` - удаляет курс из коллекции
// - `updateCourse(oldName, newName)` - изменяет имя на новое


const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];


// Add addCourse function
const addCourse = function (name) {
	console.log("Добавляется курс: ", name);

	if (courses.includes(name)) {
		console.log(`У вас уже есть ${name} курс`);
		return `У вас уже есть ${name} курс`;
	}

	console.log(`Курс ${name} добавлен`);
	return courses.push(name);
};
// Add removeCourse function
const removeCourse = function (name) {
	console.log("Удаляется курс: ", name);

	if (!courses.includes(name)) {
		console.log(`Курс с таким имененем не найден`);
		return courses;
	}
	console.log(`Курс ${name} удален`);
	return courses.splice(courses.indexOf(name), 1);
};
// Add updateCourse function
const updateCourse = function (oldName, newName) {
	console.log("Переименовуется курс: ", oldName, "на", newName);

	return courses.splice(courses.indexOf(oldName), 1, newName);
};

addCourse("Express");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse("CSS"); // 'У вас уже есть такой курс'

removeCourse("React");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse("Vue"); // 'Курс с таким имененем не найден'

updateCourse("Express", "NestJS");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
