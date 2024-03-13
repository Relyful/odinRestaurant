import './style.css';
const container = document.querySelector('#content');

export default function about() {
    container.classList.add('contentMenu');

    const aboutBoard = document.createElement('div');
    aboutBoard.classList.add('menuBoard', 'aboutBoard');
    container.appendChild(aboutBoard);

    const aboutHeader = document.createElement('div');
    aboutHeader.classList.add('aboutHeader');
    const aboutH2 = document.createElement('h2');
    aboutH2.innerText = "About Rely's Ramen";
    aboutHeader.appendChild(aboutH2);
    aboutBoard.appendChild(aboutHeader);

    const aboutContent = document.createElement('div');
    aboutContent.classList.add('aboutContent');
    aboutContent.innerText = `At Rely's Ramen, prepare to embark on a culinary journey like no other, where each steaming bowl of noodles tells a whimsical tale of flavor and fantasy. 
    Nestled in the heart of an enchanted noodle forest, Rely's Ramen invites you to savor the secret recipes handed down from generations of mystical noodle wizards. 
    The air is filled with the tantalizing aroma of bubbling cauldrons, where our resident ramen sorcerer, Chef Rely, 
    concocts spellbinding broths that promise to transport your taste buds to another dimension. 
    Rely's Ramen isn't just a restaurant; it's a portal to a world where slurping noodles takes you on an epic adventure through flavor galaxies. 
    So, grab your enchanted chopsticks and get ready to lose yourself in the enchanting world of Rely's Ramen!`;
    aboutBoard.appendChild(aboutContent);
};
