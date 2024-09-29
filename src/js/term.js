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

    console.log(target)

    const eventsList = {
        addFood: addFoodToLibrary,
        // addShop: addShopinLibary,
        // addDate: addDateinLibary,
        addFoodPanel: createFoodPanel,
    }

    if (target.closest('.header__btn')) {
        document.documentElement.classList.toggle('menu-active');
    }

    if(eventsList[panelValue]) {
        eventsList[panelValue](target);
    }
}

function createFoodPanel (e) {
    document.querySelector('[data-term-panel]').insertAdjacentHTML('beforeend', htmlBlocks[e.closest('[data-term]').getAttribute('data-term')]);
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


const htmlBlocks = {
    addFoodPanel: `
                <div data-term="panel" class="add">
                    <h4 class="add__title">Продукти</h4>
                    <h5 class="add__subtitle"><span class="add__important">*</span>Вкажіть категорію продукції</h5>
                    <div  class="select">
                        <h6 class="select__title">Виберіть категорію продуктів:</h6>
                        <select data-term="food-type" class="select__native">
                            <option value="0">Львівське світле</option>
                            <option value="1">Львівське 2</option>
                            <option value="2">Львівське 3е</option>
                            <option value="3">Львівське с43543ле</option>
                            <option checked value="4">Львівське 0</option>
                        </select>
                    </div>  
                    <p class="add__text">...або добавте свою</з>
                    <div  class="input">
                        <input data-term="food-new-type" id="food-category" class="input__field" type="text">
                        <label for="food-category" class="input__label">Категорія продукції</label>
                    </div>
                    <h5 class="add__subtitle"><span class="add__important">*</span>Вкажіть назву продукції</h5>
                    <div class="input">
                        <input data-term="food-name" id="food-name" class="input__field" type="text">
                        <label for="food-name" class="input__label">Продукт</label>
                    </div>
                    <div class="add__btns">
                        <button data-term="addFood" class="add__btn-confirm">Добавити</button>
                        <button class="add__btn-reset">Очистити</button>
                    </div>
                </div>`,
    addShopPanel: `
                <div class="add">
                    <h4 class="add__title">Магазин</h4>
                    <h5 class="add__subtitle"><span class="add__important">*</span>Вкажіть мережу магазина</h5>
                    <div class="select">
                        <h6 class="select__title">Виберіть мережу:</h6>
                        <select class="select__native">
                            <option value="1">Свій маркет</option>
                            <option value="2">Близенько</option>
                            <option value="3">Сімі</option>
                            <option value="4">Рукавичка</option>
                            <option value="4">АТБ</option>
                            <option value="4">Арсен</option>
                        </select>
                    </div>  
                    <h5 class="add__subtitle"><span class="add__important">*</span>Вкажіть назву магазина</h5>
                    <div class="input">
                        <input id="shop-name" class="input__field" type="text">
                        <label for="shop-name" class="input__label">Магазин</label>
                    </div>
                    <div class="add__btns">
                        <button class="add__btn-confirm">Добавити</button>
                        <button class="add__btn-reset">Очистити</button>
                    </div>
                </div>`,
    addDatePanel: `
                <div class="add">
                    <h4 class="add__title">Дата продукта</h4>
                    <h5 class="add__subtitle"><span class="add__important">*</span>Вкажіть назву магазина</h5>
                    <div class="select">
                        <h6 class="select__title">Виберіть магазин:</h6>
                        <select class="select__native">
                            <optgroup label="Група 1">
                                <option value="1">Опція 1</option>
                                <option value="2">Опція 2</option>
                            </optgroup>
                            <optgroup label="Група 2">
                                <option value="3">Опція 3</option>
                                <option value="4">Опція 4</option>
                            </optgroup>
                        </select>
                    </div>    
                    <h5 class="add__subtitle"><span class="add__important">*</span>Вкажіть назву продукції</h5>                                                           
                    <div class="select">
                        <h6 class="select__title">Виберіть продукт:</h6>
                        <select class="select__native">
                            <optgroup label="Група 1">
                                <option value="1">Опція 1</option>
                                <option value="2">Опція 2</option>
                            </optgroup>
                            <optgroup label="Група 2">
                                <option value="3">Опція 3</option>
                                <option value="4">Опція 4</option>
                            </optgroup>
                        </select>
                    </div>  
                    <h5 class="add__subtitle"><span class="add__important">*</span>Вкажіть кінцеву дату</h5>       
                    <div class="input input_date">
                        <input id="deadline-food" class="input__field" type="date">
                        <label for="deadline-food" class="input__label">Дата</label>
                    </div>
                    <div class="add__btns">
                        <button class="add__btn-confirm">Добавити</button>
                        <button class="add__btn-reset">Очистити</button>
                    </div>      
                </div>
    `
}