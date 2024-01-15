function slugify(title) {
    // Перетворюємо всі символи в нижній регістр
    const lowerCaseTitle = title.toLowerCase();

    // Розділяємо слова за пробілами і об'єднуємо їх тире
    const slug = lowerCaseTitle.split(' ').join('-');

    return slug;
}

// Перевірка роботи функції
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
