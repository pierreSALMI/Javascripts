'use strict'

// Quand le rendu de la page sera terminé, utilisez les selecteurs jQuery pour sélectionner et logguer:

// toutes les balises <div>
$('div');
console.log('all divs', $('div'));

// toutes les balises avec le nom de classe js-paragraph
$('.js-paragraph');
console.log('all class js-paragraph',$('.js-paragraph'));

// la balise avec l'id js-unique-paragraph
$('#js-paragraph');
console.log('id js-unique-paragraph',$('#js-unique-paragraph'));

// le premier titre <h3>
$('h3:first');
console.log('le premier titre <h3>',$('h3:first'));

// le premier <th> du premier <tr>
$('tr:first th:first');
console.log('le premier <th> du premier <tr>',$('tr:first th:first'));

// le premier <td> du chaque <tr>
console.log('le premier <td> du chaque <tr>',$('tr td:first'));

// tous les liens
console.log('tous les liens', $('a'));

// tous les lien externes (ceux qui ont l'attribut target égal à _blank)
console.log('tous les liens avec _blank', $('a[target="_blank"]'));

// tous les lien internes (ceux qui n'ont pas d'attribut target égal à _blank)
console.log('tous les liens sans _blank', $('a[target!="_blank"]'));

// tous les boutons dans un formulaire
console.log('tous les boutons dans un formulaire',$('form :button'));


$(document).ready(() => {
    $('form :button');
    
});