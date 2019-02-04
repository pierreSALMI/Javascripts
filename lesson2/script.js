'use strict';

// const myDivs = document.getElementsByTagName('div');
// console.log('myDivs', myDivs);

// const myDivs2 = document.querySelectorAll('div');
// console.log('myDivs2', myDivs2);

// // trouvez toutes les balises p avec la class my-paragraph
// const myParagraphs = document.getElementsByClassName('secondary-paragraph');
// const myParagraphs2 = document.querySelectorAll('.secondary-paragraph');

// // trouvez la balise span avec ID js-unique-el
// const myUniqueEl = documetn.getElementById('js-unique-el');
// const myUniqueEl2 = documetn.querySelector('#js-unique-el');

// // trouvez toutes les balises p qui ce trouve dans le div
// const myParagraphsInDivs = document.querySelectorAll('div p');
// console.log('myParagraphsInDivs', myParagraphsInDivs);

// const spansPreceedeByDivs = document.querySelectorAll('div + span');
// console.log('spansPreceeByDivs', spansPreceedeByDivs)


//Modifier une node

// // Ajoutez le texte 'I am the first paragraph' au premier paragraphe du document.
// const firstP = document.querySelector('.first-p');
// firstP.innerText = 'I am the first paragraph';
// console.log('firstP > text', firstP.innerText);

// // Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.
// const secondP = document.querySelector('.second-p');
// secondP.innerHTML = '<span>Hello</span>';
// console.log('secondP html', secondP.innerHTML);

// // Modifiez les attributs width à 50% et height à 'auto' de l'image.
// const myImg = document.querySelector('img');
// myImg.setAttribute('width','50%');
// myImg.setAttribute('height','50%');

// // Ajoutez un attribut alt non vide à l'image.
// myImg.setAttribute('alt', 'Random image');

// // Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.
// firstP.style.color = 'blue';
// firstP.style.fontSize = '1.5rem';

// // Ajoutez la classe img à l'image.
// //myImg.setAttribute('class','img');
// myImg.className = 'my-class';
// myImg.classList.add('my-class');
// myImg.classList.remove('some-class');

// const myBody = document.querySelector('body');
// const newEl = document.createElement('p');
// newEl.innerText = 'Hello';
// newEl.style.color = 'red';

// //dernier enfant
// myBody.appendChild(newEl)

// //premier enfant
// myBody.prepend(newEl);

// myBody.removeChild(newEl);

console.log(window)
const allDiv = document.querySelectorAll('div')

//navigator
allDiv[0].innerHTML += `<p>Nom du navigateur: ${window.navigator.appCodeName}</p>`;
allDiv[0].innerHTML += `<p>Language principal: ${window.navigator.language}</p>`;
allDiv[0].innerHTML += `<p>Plateforme de mon ordinateur: ${window.navigator.platform}</p>`;
allDiv[0].innerHTML += `<p>Cookies activé: ${window.navigator.cookieEnabled}</p>`;

//Screen
allDiv[1].innerHTML += `<p>Largeur de l'écran: ${window.screen.width}</p>`;
allDiv[1].innerHTML += `<p>Hauteur de l'écran: ${window.screen.height}</p>`;
allDiv[1].innerHTML += `<p>Orientation de l'écran: ${window.screen.orientation.type}</p>`;

//Window
allDiv[2].innerHTML += `<p>Largeur de la fenêtre: ${window.innerWidth}</p>`;
allDiv[2].innerHTML += `<p>Hauteur de la fenêtre: ${window.innerHeight}</p>`;
allDiv[2].innerHTML += `<p>Largeur du navigateur: ${window.outerWidth}</p>`;
allDiv[2].innerHTML += `<p>Hauteur du navigateur: ${window.outerHeight}</p>`;

//Location

allDiv[3].innerHTML += `<p>URL: ${window.location.href}</p>`;
allDiv[3].innerHTML += `<p>nom de l'hôter: ${window.location.pathname}</p>`;
allDiv[3].innerHTML += `<p>Nom du protocole: ${window.location.protocol}</p>`;