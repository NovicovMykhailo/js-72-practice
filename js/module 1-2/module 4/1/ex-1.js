// ## Example 1 - Коллбек функции

// Напишите следующие функции:

// - `createProduct(obj, callback)` - принимает объект товара без id, а также
//   колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в
//   свойство `id` и вызывает колбек передавая ему созданный обьект.

// - `logProduct(product)` - коллбек принимающий обьект продукта и логирующий его в
//   консоль

// - `logTotalPrice(product)` - коллбек принимающий обьект продукта и логирующий
//   общую стоимость товара в консоль


function createProduct(collectionProduct, callback){
    const product = {id: Date.now(), ...collectionProduct};
    callback(product)

}


function logProduct(product){
    console.log(product)
};

function logTotalPrice(product){
    console.log('totalprice: ', product.price * product.quantity)

}
// { name: '🍎', price: 30, quantity: 3 }
// { name: '🍋', price: 30, quantity: 3 }

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);