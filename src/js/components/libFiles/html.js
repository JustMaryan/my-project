const html = {
    title: `<div data-crib-item class="crib-panel__item crib-panel__item_title">
				<div class="crib-panel__menu">
					<button data-btn="remove" type="button" class="crib-panel__btn crib-panel__btn_remove _icon-plus"></button>
				</div>
				<div contenteditable="true" data-crib-content="title" class="crib-panel__content"></div>
			</div>`,
    text: `
    <div data-crib-item class="crib-panel__item crib-panel__item_text">
								<div class="crib-panel__menu">
									<button data-btn="bold" type="button" class="crib-panel__btn _icon-weight"></button>
									<button data-btn="italic" type="button" class="crib-panel__btn _icon-italic"></button>
									<button data-btn="createLink" type="button" class="crib-panel__btn _icon-link"></button>
									<button data-btn="justifyLeft" type="button" class="crib-panel__btn _icon-align-left"></button>
									<button data-btn="justifyCenter" type="button" class="crib-panel__btn _icon-align-center"></button>
									<button data-btn="justifyRight" type="button" class="crib-panel__btn _icon-align-right"></button>
									<button data-btn="justifyFull" type="button" class="crib-panel__btn _icon-align-justify"></button>
									<button data-btn="indent" type="button" class="crib-panel__btn _icon-unident"></button>
									<button data-btn="outdent" type="button" class="crib-panel__btn _icon-ident"></button>
									<button data-btn="remove" type="button" class="crib-panel__btn crib-panel__btn_remove _icon-plus"></button>
								</div>
								<div contenteditable="true" data-crib-content class="crib-panel__content"></div>
							</div>`,
    important: `<div data-crib-item class="crib-panel__item crib-panel__item_import">
								<div class="crib-panel__menu">
									<button data-btn="bold" type="button" class="crib-panel__btn _icon-weight"></button>
									<button data-btn="italic" type="button" class="crib-panel__btn _icon-italic"></button>
									<button data-btn="createLink" type="button" class="crib-panel__btn _icon-link"></button>
									<button data-btn="justifyLeft" type="button" class="crib-panel__btn _icon-align-left"></button>
									<button data-btn="justifyCenter" type="button" class="crib-panel__btn _icon-align-center"></button>
									<button data-btn="justifyRight" type="button" class="crib-panel__btn _icon-align-right"></button>
									<button data-btn="justifyFull" type="button" class="crib-panel__btn _icon-align-justify"></button>
									<button data-btn="indent" type="button" class="crib-panel__btn _icon-unident"></button>
									<button data-btn="outdent" type="button" class="crib-panel__btn _icon-ident"></button>
									<button data-btn="remove" type="button" class="crib-panel__btn crib-panel__btn_remove _icon-plus"></button>
								</div>
								<div contenteditable="true" data-crib-content class="crib-panel__content"></div>
							</div>	`,
    code: `<div data-crib-item class="code">
						<div class="code__header">
							<h5 class="code__title">Code</h5>
							<div class="code__btns">
								<button data-btn="cody" type="button" class="code__btn code__btn_copy">Копіювати текст
									<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
										<path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"/>
									</svg>	
								</button>
								<button data-btn="remove" type="button" class="code__btn code__btn_remove">
									<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
									</svg>																									  
								</button>
							</div>
						</div>
						<div class="code__body">
							<div data-edit data-crib-content class="code__redactor"></div>
						</div>
						<div class="code__footer">
							<p data-edit contenteditable="true" class="code__description">Опис.</p>
						</div>
					</div>`,
    panel: `<div data-chapter class="crib-chapter _crib-edit">
				<h2 contenteditable="true" data-crib-content="main-title" class="crib-chapter__title">Нова глава</h2>
				<div class="crib-chapter__edit">
					<button data-btn="remove" type="button" class="crib-chapter__btn crib-chapter__btn_remove _icon-plus">Видалити</button>
					<button data-btn="edit" type="button" class="crib-chapter__btn crib-chapter__btn_edit _icon-edit">Редагувати</button>
				</div>
				<div data-crib-items class="crib-chapter__content crib-panel"></div>	
				<div class="crib-chapter__menu">
					<div class="crib-chapter__left">
						<button data-btn="add-title" type="button" class="crib-chapter__btn crib-chapter__btn _icon-plus">Заголовок</button>
						<button data-btn="add-text" type="button" class="crib-chapter__btn crib-chapter__btn _icon-plus">Текст</button>
						<button data-btn="add-important" type="button" class="crib-chapter__btn crib-chapter__btn _icon-plus">Важливо</button>
						<button data-btn="add-code" type="button" class="crib-chapter__btn crib-chapter _icon-plus">Код</button>
						<label data-btn="order" class="crib-chapter__btn crib-chapter__order">
							<input data-crib-check type="checkbox" class="crib-chapter__order_check">
							<span class="crib-chapter__order_indicator _icon-arrows"></span>
						</label>
					</div>
					<div class="crib-chapter__right">
						<button data-btn="save" type="button" class="crib-chapter__btn crib-chapter__btn_save _icon-check">Зберегти</button>
						<button data-btn="clear" type="button" class="crib-chapter__btn crib-chapter__btn_clear _icon-plus">Очистити</button>
					</div>
				</div>
			</div>`,
    menu: `<div data-crib-menu data-spollers class="menu-crib__spoiler">
				<h2 data-spoller data-crib-menu="title" class="menu-crib__title _icon-angle-right">Найменування першої глави</h2>
				<ul data-crib-menu="items" class="menu-crib__list">
				</ul>
			</div>`
}

export default html