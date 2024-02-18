//_________________________________________________ ДЗ №1
// Функція для малювання трикутника з for
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    } 
    console.log ('______________'); 
    console.log('Done')
} 

// Виклик функції з висотою трикутника 6 та символом "*"
drawTriangle(6, '* ');


// Функція для малювання трикутника з while
function drawTriangle(height, symbol) {
    let i = 1;
    while (i <= height) {
        let row = '';
        let j = 1;
        while (j <= i) {
            row += symbol;
            j++;
        }
        console.log(row);
        i++;
    }
}


//_________________________________________________ ДЗ №2
//функція, яка виводить на екран числа від 1 до 100, які не кратні 3
function printNumbersNotDivisibleBy3() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0) {
            console.log(i);
        }
    }
}

// Виклик функції
printNumbersNotDivisibleBy3();

//_________________________________________________ ДЗ №3
// функція pow, яка повертає x у ступені y:
function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

// Виклик функції
console.log(pow(3, 5));

