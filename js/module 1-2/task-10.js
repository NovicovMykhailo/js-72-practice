// ## Example 10 - Дедлайн сдачи проекта (switch)

// Выполни рефакторинг кода задачи номер 5 используя `switch`.

const daysUntilDeadline =5;

switch (daysUntilDeadline) {
	case 0:
		console.log("Сегодня");
		break;
	case 1:
		console.log("Завтра");
		break;

	case 2:
		console.log("Послезавтра");
		break;
	default:
		console.log("Дата в будущем");
}
