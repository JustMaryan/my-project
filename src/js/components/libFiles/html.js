export const cribHTML = {
    title: `<div data-crib-item class="crib-panel__item crib-panel__item_title">
				<div class="crib-panel__menu">
					<button data-crib-btn="remove" type="button" class="crib-panel__btn crib-panel__btn_remove _icon-plus"></button>
				</div>
				<div contenteditable="true" data-crib-content="title" class="crib-panel__content"></div>
			</div>`,
    text: `
    <div data-crib-item class="crib-panel__item crib-panel__item_text">
								<div class="crib-panel__menu">
									<button data-crib-btn="bold" type="button" class="crib-panel__btn _icon-weight"></button>
									<button data-crib-btn="italic" type="button" class="crib-panel__btn _icon-italic"></button>
									<button data-crib-btn="createLink" type="button" class="crib-panel__btn _icon-link"></button>
									<button data-crib-btn="justifyLeft" type="button" class="crib-panel__btn _icon-align-left"></button>
									<button data-crib-btn="justifyCenter" type="button" class="crib-panel__btn _icon-align-center"></button>
									<button data-crib-btn="justifyRight" type="button" class="crib-panel__btn _icon-align-right"></button>
									<button data-crib-btn="justifyFull" type="button" class="crib-panel__btn _icon-align-justify"></button>
									<button data-crib-btn="indent" type="button" class="crib-panel__btn _icon-unident"></button>
									<button data-crib-btn="outdent" type="button" class="crib-panel__btn _icon-ident"></button>
									<button data-crib-btn="remove" type="button" class="crib-panel__btn crib-panel__btn_remove _icon-plus"></button>
								</div>
								<div contenteditable="true" data-crib-content class="crib-panel__content"></div>
							</div>`,
    important: `<div data-crib-item class="crib-panel__item crib-panel__item_import">
								<div class="crib-panel__menu">
									<button data-crib-btn="bold" type="button" class="crib-panel__btn _icon-weight"></button>
									<button data-crib-btn="italic" type="button" class="crib-panel__btn _icon-italic"></button>
									<button data-crib-btn="createLink" type="button" class="crib-panel__btn _icon-link"></button>
									<button data-crib-btn="justifyLeft" type="button" class="crib-panel__btn _icon-align-left"></button>
									<button data-crib-btn="justifyCenter" type="button" class="crib-panel__btn _icon-align-center"></button>
									<button data-crib-btn="justifyRight" type="button" class="crib-panel__btn _icon-align-right"></button>
									<button data-crib-btn="justifyFull" type="button" class="crib-panel__btn _icon-align-justify"></button>
									<button data-crib-btn="indent" type="button" class="crib-panel__btn _icon-unident"></button>
									<button data-crib-btn="outdent" type="button" class="crib-panel__btn _icon-ident"></button>
									<button data-crib-btn="remove" type="button" class="crib-panel__btn crib-panel__btn_remove _icon-plus"></button>
								</div>
								<div contenteditable="true" data-crib-content class="crib-panel__content"></div>
							</div>	`,
    code: `<div data-crib-item class="crib-panel__item crib-panel__item_code">
								<div class="crib-panel__menu">
									<button data-crib-btn="remove" type="button" class="crib-panel__btn crib-panel__btn_remove _icon-plus"></button>
								</div>
								<div contenteditable="true" data-crib-content class="crib-panel__content"></div>
							</div>	`,
    panel: `<div data-crib-container class="crib-chapter _crib-edit">
				<h2 contenteditable="true" data-crib-content="main-title" class="crib-chapter__title">Нова глава</h2>
				<div class="crib-chapter__edit">
					<button data-crib-btn="remove" type="button" class="crib-chapter__btn crib-chapter__btn_remove _icon-plus">Видалити</button>
					<button data-crib-btn="edit" type="button" class="crib-chapter__btn crib-chapter__btn_edit _icon-edit">Редагувати</button>
				</div>
				<div data-crib-items class="crib-chapter__content crib-panel"></div>	
				<div class="crib-chapter__menu">
					<div class="crib-chapter__left">
						<button data-crib-btn="add-title" type="button" class="crib-chapter__btn crib-chapter__btn _icon-plus">Заголовок</button>
						<button data-crib-btn="add-text" type="button" class="crib-chapter__btn crib-chapter__btn _icon-plus">Текст</button>
						<button data-crib-btn="add-important" type="button" class="crib-chapter__btn crib-chapter__btn _icon-plus">Важливо</button>
						<button data-crib-btn="add-code" type="button" class="crib-chapter__btn crib-chapter _icon-plus">Код</button>
						<label data-crib-btn="order" class="crib-chapter__btn crib-chapter__order">
							<input data-crib-check type="checkbox" class="crib-chapter__order_check">
							<span class="crib-chapter__order_indicator _icon-arrows"></span>
						</label>
					</div>
					<div class="crib-chapter__right">
						<button data-crib-btn="save" type="button" class="crib-chapter__btn crib-chapter__btn_save _icon-check">Зберегти</button>
						<button data-crib-btn="clear" type="button" class="crib-chapter__btn crib-chapter__btn_clear _icon-plus">Очистити</button>
					</div>
				</div>
			</div>`,
    menu: `<div data-crib-menu data-spollers class="menu-crib__spoiler">
				<h2 data-spoller data-crib-menu="title" class="menu-crib__title _icon-angle-right">Найменування першої глави</h2>
				<ul data-crib-menu="items" class="menu-crib__list">
				</ul>
			</div>`
}