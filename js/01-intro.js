// Змінні
// const - змінна, яка не буде переприсвоюватися
// let - змінна, яка буде переприсвоюватися
// var - застаріло, не використовуємо

// const message = 'Привіт, JavaScript!';
// alert('Тип змінної message ' + typeof message);
// alert(message);
// const anotherMessage = 42;
// alert('Тип змінної anotherMessage ' + typeof anotherMessage);
// alert(anotherMessage);

const userAge = Number(prompt('Введіть ваш вік'));
console.log('Тип userAge', typeof userAge);
console.log('Вік користувача', userAge);

const nextAge = add(userAge, 1);
console.log('Тип nextAge', typeof nextAge);
console.log('Наступний вік', nextAge);

// Базові типи даних
// String - текст
// Number - число, 42, 4.2, -42, 4e2, Infinity, NaN
// Boolean - логічний тип: true / false
// undefined - не визначено
// null - пусто
// Object - базовий тип для складних типів

// Не будемо вивчати
// Symbol - унікальний ідентифікатор
// BigInt - великі цілі числа

if (userAge >= 18) {
    console.log('Користувач повнолітній');
} else {
    console.log('Користувач неповнолітній');
}

// Функції
function add(a, b) {
    return a + b;
}