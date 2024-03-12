import './style.css';
const container = document.querySelector('#content');

export default function home() {
    container.classList.add('contentHome');
    const centerDiv = document.createElement('div');
    centerDiv.innerHTML = 'Ramen Rely';
    centerDiv.classList.add('center');
    const footerDiv = document.createElement('div');
    footerDiv.innerHTML = 'Japanese Restaurant';
    footerDiv.classList.add('footer');

    container.appendChild(centerDiv);
    container.appendChild(footerDiv);
};