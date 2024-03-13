import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';

const container = document.querySelector('#content');
const homeBut = document.querySelector('.home');
const menuBut = document.querySelector('.menu');
const aboutBut = document.querySelector('.about');


loadHome();

[homeBut, menuBut, aboutBut].forEach((element) => {
    element.addEventListener('click', (e) => {
        container.innerHTML = "";
        container.classList.remove(...container.classList);
        if (e.target == menuBut) {
            loadMenu();
        }
        else if(e.target == homeBut) {
            loadHome();
        }
        else if(e.target == aboutBut) {
            loadAbout();
        }
    })
})