// 2. Cоздать функцию greeting, которая принимает имя и выводит приветствие, 
// используя переданное имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда данное значение.

const yourName = prompt('Введите имя:');
greeting(yourName);

function greeting(name) {
    console.log(`Привет, ${name}!`); 
}