// ## Example 5 - Операция spread

// Дополни функцию `createContact(partialContact)` так, 
// чтобы она возвращала новый
// объект контакта с добавленными свойствами 
// `id` и `createdAt`,`list` со

function createContact(partialContact) {
    return {
      list: 'default',
      ...partialContact,
      id: generateId(),
      createdAt: Date.now()//Date.now(),
    };
  }
  
  console.log(createContact({ name: 'Mango',nemail: 'mango@mail.com', list: 'friends',}),
  );
  console.log(createContact({ name: 'Poly', email: 'poly@hotmail.com',}),
  );
  
  function generateId() {
    return '_' + Math.random().toFixed(4).substr(2, 4);
  }
  