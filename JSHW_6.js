___________________________ДЗ1

function myBlend(arr) {
    arr.sort(() => Math.random() - 0.5);
}

// Приклад
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Початковий масив:", arr);
myBlend(arr);
console.log("Перемішаний масив:", arr);


__________________________ДЗ2
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, obj) {
    if (obj.name === companyName) {
        return obj;
    }
    
    if (obj.clients) {
        for (let client of obj.clients) {
            const result = findValueByKey(companyName, client);
            if (result) {
                return result;
            }
        }
    }
    
    if (obj.partners) {
        for (let partner of obj.partners) {
            const result = findValueByKey(companyName, partner);
            if (result) {
                return result;
            }
        }
    }
    
    return null;
}

// Приклад використання:
const companyInfo = findValueByKey('Клієнт 1.2.3', company);
console.log(companyInfo);
