'use strict'

document.cookie = 'lang=fr';

document.cookie = 'previewSeen=true;expires='+new Date('2019-02-12');

docCookies.setItem('test','test', new Date('2019-12-31'));

docCookies.setItem('userId', 123);

console.log(docCookies.getItem('userId'),typeof docCookies.getItem('userId'));

docCookies.setItem('userId',321);

docCookies.removeItem('userId');


//stocker un objet
const user = {
    id: 1,
    name: 'Thibaud'
}
docCookies.setItem('user',JSON.stringify(user));
const myObj = docCookies.getItem('user');
console.log('myobj',myObj);
console.log('myObj parsed', JSON.parse(myObj));


//LOCAL storage

// Vérifiez si l'objet LocalStorage est supporté par le navigateur.
if (localStorage){
    localStorage.setItem('greeting','Hello world');
    console.log(localStorage.getItem('greeting'));
    localStorage.setItem('greeting','Welcome');
    localStorage.removeItem('greeting');
    localStorage.clear(); //delete toutes les entré
}

// Créez une entrée greeting égale à 'Hello World'. Créez une entrée adIds égale à l'objet {top: 1, bottom: 2}. Récupérez greeting. Modifiez cette entrée à 'Welcome'. 
// Supprimez greeting du LocalStorage.

