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

// Ajoutez le texte 'I am the first paragraph' au premier paragraphe du document.
const firstP = document.querySelector('.first-p');
firstP.innerText = 'I am the first paragraph';
console.log('firstP > text', firstP.innerText);

// Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.
const secondP = document.querySelector('.second-p');
secondP.innerHTML = '<span>Hello</span>';
console.log('secondP html', secondP.innerHTML);

// Modifiez les attributs width à 50% et height à 'auto' de l'image.
const myImg = document.querySelector('img');
myImg.setAttribute('width','50%');
myImg.setAttribute('height','50%');

// Ajoutez un attribut alt non vide à l'image.
myImg.setAttribute('alt', 'Random image');

// Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.
firstP.style.color = 'blue';
firstP.style.fontSize = '1.5rem';

// Ajoutez la classe img à l'image.
//myImg.setAttribute('class','img');
myImg.className = 'my-class';
myImg.classList.add('my-class');
myImg.classList.remove('some-class');

const myBody = document.querySelector('body');
const newEl = document.createElement('p');
newEl.innerText = 'Hello';
newEl.style.color = 'red';

//dernier enfant
myBody.appendChild(newEl)

//premier enfant
myBody.prepend(newEl);
