//_________________________________________5th JS Homework 

//________________________________1st Part

//Створюємо обʼект
let phone = {
    brand: 'IPhone',
    capacity: 256,
    display: 'Super Retina XDR display 6.1‑inch',

    //Створюємо функцію відображення властивостей
    getInfo: function() {
        let info = "";
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                info += key + ": " + this[key] + "\n";
            }
        }
        console.log(info);
    }
};

phone.getInfo(); // Попередня інформація про телефон

phone.chip = 'A15 Bionic chip'; // Додали властивість до об'єкта

phone.getInfo(); // Виводить всі властивості, включаючи щойно додану.


//________________________________2nd Part

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    
    // Метод, який обчислює та повертає загальну вартість наданих послуг
    price: function() {
        let total = 0;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                total += parseInt(this[key]);
            }
        }
        return total;
    },
    
    // Метод, який повертає мінімальну ціну серед послуг
    minPrice: function() {
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let price = parseInt(this[key]);
                if (price < min) {
                    min = price;
                }
            }
        }
        return min;
    },
    
    // Метод, який повертає максимальну ціну серед послуг
    maxPrice: function() {
        let max = -Infinity;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let price = parseInt(this[key]);
                if (price > max) {
                    max = price;
                }
            }
        }
        return max;
    }
};

// Додамо нову послугу
services['Розбити скло'] = "200 грн";

// Викликаємо методи price(), minPrice() та maxPrice()
console.log("Загальна вартість наданих послуг:", services.price() + " грн");
console.log("Мінімальна ціна серед послуг:", services.minPrice() + " грн");
console.log("Максимальна ціна серед послуг:", services.maxPrice() + " грн");
