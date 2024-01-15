// task-3.js

function filterArray(numbers, value) {
    // Створюємо порожній масив для збереження підходящих чисел
    let filteredArray = [];

    // Використовуємо цикл для ітерації кожного елемента масиву numbers
    for (let i = 0; i < numbers.length; i++) {
        // Використовуємо умовний оператор if для перевірки кожного елемента та додавання його до масиву
        if (numbers[i] > value) {
            filteredArray.push(numbers[i]);
        }
    }

    // Повертаємо новий масив з підходящими числами
    return filteredArray;
}

// Перевірка роботи функції за допомогою виводу у консоль
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
