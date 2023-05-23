//Header

(function() {
   const header = document.querySelector('.header');
   window.onscroll = () => {
     if (window.pageYOffset > 50) {
        header.classList.add('header_active');
      } else {
        header.classList.remove('header_active');
        
      }
   };
}());




//Header

// Burger handler

(function ()  {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
        burgerItem.addEventListener('click', () => {
          menu.classList.add('header__nav_action');
        });
        menuCloseItem.addEventListener('click', () => {
          menu.classList.remove('header__nav_action');
        });
}());


const button = document.querySelector('.places__card-pic');
const form = document.querySelector('.places__card');
const popup = document.querySelector('.places__card-link');


button.addEventListener('click', () => {
  popup.classList.add('pop_up_open');
});

popup.addEventListener('click', (event) => {
  if(event.target.classList.contains('pop_up')){
    popup.classList.toggle('hidden')
  }
});

//About

const conteinerEl = document.querySelector('.popup_1');
const buttonEl = document.querySelector('.bu__bu');
const buttonElClose = document.querySelector('.header__link');

buttonEl.addEventListener('click', () => {
  conteinerEl.classList.remove('hidden')
});

buttonElClose.addEventListener('click', () => {
  conteinerEl.classList.add('hidden')
});

document.addEventListener('keydown', (evt) => {
 if(evt.key === 'Escape'){
  evt.preventDefault();
  conteinerEl.classList.add('hidden')

 }

});


const mainForm = document.querySelectorAll('form');;
console.log(mainForm);
 


