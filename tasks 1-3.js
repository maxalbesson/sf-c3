// task 1
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
const obj1 = {};
obj1.a = 1;
obj1.b = 2;

function ownObj(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop, obj[prop]);
    }
  }
};

console.log(ownObj(obj1))

// task 2
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
function checkProp(str, obj) {
    return (str in obj);
};

console.log(checkProp('c', obj1))
console.log(checkProp('b', obj1))

// task 3
// Написать функцию, которая создает пустой объект, но без прототипа.
function createObj() {
  return Object.create(null);
};

console.log(createObj())