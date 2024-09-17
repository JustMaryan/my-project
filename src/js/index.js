import "../scss/index.scss";

// Default theme
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
  // Знаходимо всі посилання з атрибутом data-json-path
  const links = document.querySelectorAll('a[data-json-path]');

  links.forEach(link => {
      link.addEventListener('click', (event) => {
          // Скасувати стандартну поведінку посилання
          event.preventDefault();

          // Отримати значення шляху до JSON з атрибута data-json-path
          const jsonPath = link.getAttribute('data-json-path');

          // Зберегти шлях до JSON у localStorage
          localStorage.setItem('jsonPath', jsonPath);

          // Програмно перенаправити користувача на іншу сторінку
          window.location.href = link.href;
      });
  });
});

var splide = new Splide( '.splide', {
    rewind: true,
    speed : 1000,
    width: '90%',
    height: '100%',
    perPage : 3,
    perMove : 1,
    gap: '25px',
    arrows : true,
    // direction : 'ttb',
    breakpoints: 
    {
      970: {
      // direction: 'rtl',
      perPage: 2,
      },

      460: {
        perPage: 1,
        width: '100%',
      }
    },
    pagination: false,
    // padding: 25,
  });
  
  splide.mount();

const home = document.querySelector('.wrapper');

home.addEventListener('click', (e) => {
  const target = e.target;

  // Tabs
  if(target.closest('[data-tab-btn]')) {
    const tabWrapper = document.querySelector('.catalog');
    const activeBtn = target.closest('[data-tab-btn]');
    const activeNumber = activeBtn.dataset.tabBtn;
    const allTabContents = document.querySelectorAll('[data-tab]');
    clearAllTab (allTabContents);
    addTabActive(allTabContents, activeNumber);
    tabWrapper.classList.add('active');

  }
  if (target.closest('[data-tab-remove]')) {
    const tabWrapper = document.querySelector('.catalog');
    tabWrapper.classList.remove('active');

  }
  // Info btn
  if (target.closest('.card__title')) {
    
    const content = target.closest('.card__title').parentElement;
    content.classList.toggle('active-card');
  }

  function clearAllTab (tabs) {
    tabs.forEach(item => {
      if(item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
  }

  function addTabActive(tabs, number) {
    for (let item of tabs) {
      if (item.dataset.tab == number) {
        item.classList.add('active');
        break;
      }
    }
  }
})
