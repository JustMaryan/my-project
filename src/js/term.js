import "../scss/term.scss";


// menu


// const page = document.querySelector('.term');

document.addEventListener('click', pageEvents);

const inputs = document.querySelectorAll('.input__field');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            input.classList.remove('active');
        }
    });
});

function pageEvents (e) {
    const target = e.target;
    const panelElement = target.closest('[data-term]');
    const panelValue =  panelElement ? panelElement.getAttribute('data-term') : null;

    const eventsList = {
        addFood: addFoodToLibrary,
        // addShop: addShopinLibary,
        // addDate: addDateinLibary
    }

    if (target.closest('.menu__icon')) {
        document.documentElement.classList.toggle('menu-active');
    }

    if(eventsList[panelValue]) {
        eventsList[panelValue](target)
    }


}

function addFoodToLibrary(target) {
    const foodPanel = target.closest('[data-term="panel"]');
    const foodTypeSelect = foodPanel.querySelector('[data-term="food-type"]');
    const newFoodTypeInput = foodPanel.querySelector('[data-term="food-new-type"]');
    const foodNameInput = foodPanel.querySelector('[data-term="food-name"]');

    const newFoodTypeName = newFoodTypeInput.value.trim();
    const newFoodName = foodNameInput.value.trim();

    // Функція для перевірки унікальності назви їжі
    const isFoodNameUnique = (name) => !Object.values(termsProducts.food).some(type => Object.values(type.foodList).includes(name));

    // Функція для додавання їжі до типу
    const addFoodToType = (foodType, foodName) => {
        const newFoodKey = `foodName${Object.keys(foodType.foodList).length + 1}`;
        foodType.foodList[newFoodKey] = foodName;
        console.log(`Додано їжу "${foodName}" до типу "${foodType.typeName}".`);
    };

    // Основна логіка обробки введення
    if (newFoodName) {
        if (newFoodTypeName) {
            const existingFoodType = Object.values(termsProducts.food).find(type => type.typeName === newFoodTypeName);
            if (existingFoodType) {
                // Додаємо до існуючого типу
                if (isFoodNameUnique(newFoodName)) {
                    addFoodToType(existingFoodType, newFoodName);
                } else {
                    console.log(`Їжа "${newFoodName}" вже існує в іншому типі.`);
                }
            } else {
                // Створюємо новий тип їжі
                const newFoodTypeKey = `type${Object.keys(termsProducts.food).length + 1}`;
                termsProducts.food[newFoodTypeKey] = { typeName: newFoodTypeName, foodList: {} };
                addFoodToType(termsProducts.food[newFoodTypeKey], newFoodName);
            }
        } else {
            // Додаємо до існуючого типу, якщо новий тип не введено
            const selectedFoodTypeName = foodTypeSelect.options[foodTypeSelect.selectedIndex].text;
            const existingFoodType = Object.values(termsProducts.food).find(type => type.typeName === selectedFoodTypeName);
            if (existingFoodType) {
                if (isFoodNameUnique(newFoodName)) {
                    addFoodToType(existingFoodType, newFoodName);
                } else {
                    console.log(`Їжа "${newFoodName}" вже існує в іншому типі.`);
                }
            }
        }
    } else {
        console.log("Будь ласка, введіть назву їжі.");
    }
}


function addFoodSelector (target){
    const foodPanel = target.closest('[data-term="panel"]');
}





const termsProducts = {
    food: {
        type1: {
            typeName: 'Львівське світле',
            foodList: {
                foodName1: 'Львівське світле скл',
                foodName2: 'Львівське світле жб',
                foodName3: 'Львівське світле 1.18л',
                foodName4: 'Львівське світле 2.25л',
            }
        }
    },
    shops: {
        market1: {
            shopType: "Свій маркет",
            shop1: {
                shopAddres: 'Кошиця 1',
                foodList: {
                    food1: {
                        foodName: "Львівське світле",
                        foodDate: "20.01.2025"
                    }
                }
            }
        },
        market2: {
            shopType: "Близенько",
            shop1: {
                shopAddres: 'Кошиця 1',
                foodList: {
                    food1: {
                        foodName: "Львівське світле",
                        foodDate: "20.01.2025"
                    }
                }
            }
        },
        market3: {
            shopType: "Рукавичка",
            shop1: {
                shopAddres: 'Кошиця 1',
                foodList: {
                    food1: {
                        foodName: "Львівське світле",
                        foodDate: "20.01.2025"
                    }
                }
            }
        },
        market4: {
            shopType: "АТБ",
            shop1: {
                shopAddres: 'Кошиця 1',
                foodList: {
                    food1: {
                        foodName: "Львівське світле",
                        foodDate: "20.01.2025"
                    }
                }
            }
        },
        market5: {
            shopType: "Сімі",
            shop1: {
                shopAddres: 'Кошиця 1',
                foodList: {
                    food1: {
                        foodName: "Львівське світле",
                        foodDate: "20.01.2025"
                    }
                }
            }
        },
        market6: {
            shopType: "Арсен",
            shop1: {
                shopAddres: 'Кошиця 1',
                foodList: {
                    food1: {
                        foodName: "Львівське світле",
                        foodDate: "20.01.2025"
                    }
                }
            }
        }
    },
}
