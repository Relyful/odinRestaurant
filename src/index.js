import './style.css';

const hello = document.createElement('div');
hello.innerText = 'H4ck3rm4n';
hello.classList.add('blue-color');

const container = document.querySelector('main');

container.appendChild(hello);