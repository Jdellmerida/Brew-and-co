const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu1');
window.addEventListener('scroll', function () {
  if (this.scrollY > 200) {
    nav.classList.add('slidedown');
    nav.classList.remove('slideup');
    logo.style.color = '#000';
    menu.style.color = '#000';
    nav.style.backgroundColor = '#fff';
    nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  } 
  else if (this.scrollY < 200 ) {
    nav.classList.remove('slidedown');
    nav.classList.add('slideup');
    logo.style.color = '#000';
    menu.style.color = '#fff';
    nav.style.backgroundColor = '#fff';
    nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  }
  else {
    nav.classList.add('slideup');
    nav.classList.remove('slidedown');
    logo.style.color = '';
    nav.style.backgroundColor = '#ffffff00';
    menu.style.color = '#fff';
    nav.style.border = 'none';
   
  }
});
