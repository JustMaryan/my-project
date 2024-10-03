export const htmlBlocks = {
    createFoodForm: `
       <div data-term-body="saveNewFood" class="form">
            <div class="form__content">
                <button data-term-btn="removeForm" class="form__btn-remove"></button>
                <h4 class="form__title">Продукти</h4>
                <h5 class="form__subtitle"><span class="form__important">*</span>Вкажіть категорію продукції</h5>
                <div class="select">
                    <h6 class="select__title">Виберіть категорію продуктів:</h6>
                    <select data-term-select="type-list" class="select__native">
                    <option value="0">- ---- -</option>
                    </select>
                </div>  
                <p class="form__text">...або добавте свою</з>
                <div  class="input">
                    <input data-term-input="new-type" id="food-category" class="input__field" type="text" autocomplete="off">
                    <label for="food-category" class="input__label">Категорія продукції</label>
                </div>
                <h5 class="form__subtitle"><span class="form__important">*</span>Вкажіть назву продукції</h5>
                <div class="input">
                    <input data-term-input="new-food" id="food-name" class="input__field" type="text" autocomplete="off">
                    <label for="food-name" class="input__label">Продукт</label>
                </div>
                <div class="form__btns">
                    <button data-term-btn="saveForm" class="form__btn-confirm">Добавити</button>
                    <button data-term-btn="clearForm" class="form__btn-reset">Очистити</button>
                </div>
            </div>
        </div>`,
    createShopForm: `
        <div data-term-body="saveNewShop" class="form">
            <div class="form__content">
                <button data-term-btn="removeForm" class="form__btn-remove"></button>
                <h4 class="form__title">Магазин</h4>
                <h5 class="form__subtitle"><span class="form__important">*</span>Вкажіть мережу магазина</h5>
                <div class="select">
                    <h6 class="select__title">Виберіть мережу:</h6>
                    <select data-term-select="market-list" class="select__native">
                        <option value="0">- ---- -</option>
                        <option value="1">Свій маркет</option>
                        <option value="2">Близенько</option>
                        <option value="3">Сімі</option>
                        <option value="4">Рукавичка</option>
                        <option value="4">АТБ</option>
                        <option value="4">Арсен</option>
                    </select>
                </div>  
                <h5 class="form__subtitle"><span class="form__important">*</span>Вкажіть назву магазина</h5>
                <div class="input">
                    <input data-term-input="new-shop" id="shop-name" class="input__field" type="text" autocomplete="off">
                    <label for="shop-name" class="input__label">Магазин</label>
                </div>
                <div class="form__btns">
                    <button data-term-btn="saveForm" class="form__btn-confirm">Добавити</button>
                    <button data-term-btn="clearForm" class="form__btn-reset">Очистити</button>
                </div>
            </div>
        </div>`,
    createDateForm: `
        <div data-term-body="saveNewDate" class="form">
            <div class="form__content">
                <button data-term-btn="removeForm" class="form__btn-remove"></button>
                <h4 class="form__title">Дата продукта</h4>
                <h5 class="form__subtitle"><span class="form__important">*</span>Вкажіть назву магазина</h5>
                <div class="select">
                    <h6 class="select__title">Виберіть магазин:</h6>
                    <select data-term-select="shop-list" class="select__native">
                        <option value="0">- ---- -</option>
                    </select>
                </div>    
                <h5 class="form__subtitle"><span class="form__important">*</span>Вкажіть назву продукції</h5>                                                           
                <div class="select">
                    <h6 class="select__title">Виберіть продукт:</h6>
                    <select data-term-select="food-list" class="select__native">
                        <option value="0">- ---- -</option>
                    </select>
                </div>  
                <h5 class="form__subtitle"><span class="form__important">*</span>Вкажіть кінцеву дату</h5>       
                <div class="input input_date">
                    <input data-term-date="new-date" id="deadline-food" class="input__field" type="date">
                    <label for="deadline-food" class="input__label">Дата</label>
                </div>
                <div class="form__btns">
                    <button data-term-btn="saveForm" class="form__btn-confirm">Добавити</button>
                    <button data-term-btn="clearForm" class="form__btn-reset">Очистити</button>
                </div>      
            </div>
        </div>
        `
}