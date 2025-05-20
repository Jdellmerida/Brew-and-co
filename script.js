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
    menu.style.color = '#666666';
    nav.style.backgroundColor = '#fff';
    nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  }
  else {
    nav.classList.add('slideup');
    nav.classList.remove('slidedown');
    logo.style.color = '';
    nav.style.backgroundColor = '#ffffff00';
    menu.style.color = '#666666';
    nav.style.border = 'none';
   
  }
});

const Menu = document.querySelector('.menu1');
const navLinks = document.querySelector('.mb');
const icon = Menu.querySelector('i');
const Nav = document.querySelector('nav');
let menuOpen = false;

Menu.addEventListener('click', () => {
  if (window.innerWidth <= 1000) {
    navLinks.classList.toggle('show');
  Menu.style.color = '#000';

      if (navLinks.classList.contains('show')) {
      icon.classList.remove('bx-menu');
      icon.classList.add('bx-x'); 
      icon.style.margin = '0px 0';
      Nav.style.display = 'none';
    } else {
      icon.classList.remove('bx-x');
      icon.classList.add('bx-menu'); 
      Menu.style.color = '#fff';
           Nav.style.display = 'flex';
  }
    } else {
    Nav.style.display = 'flex';
    navLinks.classList.remove('show');
    icon.classList.remove('bx-x');
    icon.classList.add('bx-menu');
    Menu.style.color = '#000'; 
  }


});

