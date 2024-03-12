import './style.css';
import ramen from './img/xramen-nigoshi-z-kurkoyu-teriyaki-site-500x500.webp.pagespeed.ic.KYqd4pQrja.webp'
import katsu from './img/katsu.png';

const container = document.querySelector('#content');

export default function menu() {
    container.classList.add('contentMenu');

    const menuBoard = document.createElement('div');
    menuBoard.classList.add('menuBoard');
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menuHeader');
    menuBoard.appendChild(menuHeader);
    const headerH2 = document.createElement('h2');
    headerH2.innerText = 'Ramen';
    menuHeader.appendChild(headerH2);

    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
    menuBoard.appendChild(menuContent);
    const ramenImage = new Image;
    ramenImage.src = ramen;
    ramenImage.classList.add('menuRamenPic');
    menuContent.appendChild(ramenImage);
    const katsuImage = new Image;
    katsuImage.src = katsu;
    katsuImage.classList.add('menuRamenPic2');
    menuContent.appendChild(katsuImage);

    const menuItem = document.createElement('div');
    const menuItem1 = document.createElement('div');
    menuItem.classList.add('menuItem');
    menuItem1.classList.add('menuItem');

    const menuH5 = document.createElement('h5');
    menuH5.innerText = 'Ramen Shoyu';
    const menuP = document.createElement('p');
    menuP.innerText = 'Soy sauce flavor and a clear soup broth served with medium-thin curly noodles';

    const menuH51 = document.createElement('h5');
    menuH51.innerText = 'Ramen Shoyu';
    const menuP1 = document.createElement('p');
    menuP1.innerText = 'Soy sauce flavor and a clear soup broth served with medium-thin curly noodles';

    menuItem.appendChild(menuH5);
    menuItem.appendChild(menuP);
    menuItem1.appendChild(menuH51);
    menuItem1.appendChild(menuP1);

    menuContent.appendChild(menuItem);
    menuContent.appendChild(menuItem1);


    container.appendChild(menuBoard);
};