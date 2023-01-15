// ## Example 9 - Дедлайн сдачи проекта (if...else)

// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй
// конструкцию `if...else`.

// - Eсли до дедлайна 0 дней - выведи строку `"Сегодня"`
// - Eсли до дедлайна 1 день - выведи строку `"Завтра"`
// - Eсли до дедлайна 2 дня - выведи строку `"Послезавтра"`
// - Eсли до дедлайна 3+ дней - выведи строку `"Дата в будущем"`
var daysUntilDeadline = prompt("give days");
 daysUntilDeadline = Number(daysUntilDeadline);
// Пиши код ниже этой строки
var message;

if (daysUntilDeadline === 0) {
	message = "Сегодня"
} else if (daysUntilDeadline === 1) {
	message = "Завтра"
} else if (daysUntilDeadline === 2) {
	message = "Послезавтра"
} else {
	message = "Дата в будущем"
}

alert(message)
