'use strict'
// Logguez dans la console 'Hello' 3 secondes après le rendu de la page.
setTimeout( () => {
    console.log('hello 3s');
}, 3000)

// Logguez dans la console 'Logged after 5 seconds' 5 secondes après le rendu de la page.
setTimeout( () => {
    console.log('hello 5s');
}, 5000)

// Ajoutez un écouteur d'événement 'click' à l'objet window pour logguer dans la console 'Clicked' 3 secondes après le clique.
window.addEventListener('click', () => {
    setTimeout(() => {
        console.log('Get Clicked');
    }, 3000);
})
// const oui = document.querySelector('div')
// oui.addEventListener('mouseenter', () => {
//     setTimeout(() => {
//         console.log('I was hovered 5.5 seconds ago')
//     }, 5500);
// })

// Créez un div. Au survol de ce div logguez dans la console 'I was hovered 5.5 seconds ago' 5 secondes plus tard.


// const oui = document.querySelector('div')
// oui.addEventListener('mouseenter', () => {
//     setTimeout(() => {
//         console.log('I was hovered 5.5 seconds ago')
//     }, 5500);
// })


// Créez dynamiquement une image avec src égal à http://lorempixel.com/400/200/.

// Quand l'image sera entièrement chargée, logguez dans la console 'Done!' et l'affichez sur la page.

// En cas d'erreur de chargement, logguez dans la console 'Error'.
const myImg = document.createElement('img');
myImg.src = 'http://lorempixel.com/400/200/'
myImg.onload = () => {
    console.log('done img')
    document.body.appendChild(myImg);
}
myImg.onerror = () => {
    console.log('Error');
}

// Créez dynamiquement une node de script avec l'url de la librarie lodash: https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js.

// Quand le script sera téléchargé, appelez la fonction round pour arrondir le nombre 10.02.

const myScript = document.createElement('script');
myScript.src = 'https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js';
document.body.appendChild(myScript)
myScript.onload = () => {
    console.log('done script')
    console.log(_.round(10.56325, 2))
}