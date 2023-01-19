function checkStorage(available, ordered) {
	// Change code below this line
	if (ordered === 0) {
		return console.log("Your order is empty!");}
	if (ordered > available) {
		return console.log("Your order is too large, not enough goods in stock!");
	}
		return console.log("The order is accepted, our manager will contact you");
	// Change code above this line
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20); //возвращает "The order is accepted, our manager will contact you"
checkStorage(200, 250); //возвращает "Your order is too large, not enough goods in stock!"
checkStorage(150, 0); //возвращает "Your order is empty!"


