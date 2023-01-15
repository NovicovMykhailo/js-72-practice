// Используя конструкцию if..else и prompt, напиши код, который будет
// спрашивать: "Какое официальное название JavaScript?".
//  Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!",
// в противном случае - "Не знаете? ECMAScript!"

let name = prompt("Какое официальное название JavaScript?");
if (name === "ECMAScript"){
    alert("Верно!");
}else{
    alert("Не знаете? ECMAScript!");
}