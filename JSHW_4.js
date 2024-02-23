//________________________________________________ДЗ1

function myIsNaN(value) {
    // Перевірка чи вхідне значення не є числом
    if (typeof value !== 'number' || value !== value) {
        return true;
    }

    return false;
}

//________________________________________________ДЗ2

function checkProbabilityTheory(count) {
    let min = 100;
    let max = 1000;
    let pair = 0;
    let notPair = 0;

    // Генергенерація чисел в діапазоні від 100 до 1000
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        if (randomNumber % 2 === 0) {
            pair++;
        } else {
            notPair++;
        }
    }

    // Відсоткове співвідношення
    let totalNumbers = pair + notPair;
    let pairPercentage = (pair / totalNumbers) * 100;
    let notPairPercentage = (notPair / totalNumbers) * 100;

    // Результати
    console.log("Кількість згенерованих чисел:", totalNumbers);
    console.log("Парних чисел:", pair);
    console.log("Непарних чисел:", notPair);
    console.log("Відсоток парних до непарних:", pairPercentage.toFixed(2) + "%:" + notPairPercentage.toFixed(2) + "%");
}

// Приклад використання
checkProbabilityTheory(1000);
