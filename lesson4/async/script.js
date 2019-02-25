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

// Créez un div. Au survol de ce div logguez dans la console 'I was hovered 5.5 seconds ago' 5 secondes plus tard.

