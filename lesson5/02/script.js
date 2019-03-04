'use strict'

// Récupérez et logguez dans la console le contenu du titre de la page.
// const h1text = $('h1').text();
// console.log('h1text', h1text);

// // Changez le contenu du titre de la page à 'My page title'.
// $('h1').text('My page title ALED');

// // Récupérez et logguez dans la console le HTML de l'article.
// const articleHTML = $('#js-article').html();

// // Changez le contenu de l'article à
// $('#js-article').html(`
//     <h2>This is my article.</h2>
//     <p>This is my article's content.</p>
// `);

// // Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.
// const inputValue = $('#js-search').val();

// // Changez la valeur du champ de saisie à 'Beagles'
// $('#js-search').val('Beagles');

// // Récupérez et logguez dans la console la valeur du placeholder du champ de saisie.
// const value = $('#js-search').attr('placeholder')
// console.log('value = ', value)

// // Changez la valeur du placeholder du champ de saisie à 'Search'
// $('#js-search').val('Search');


$('#js-search-form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    var value = $('#js-search').val();
    if(value == 'Chat'){
        $('#js-search-result').html(`
        <p> Miaou! </p>
        `)
    } else {
        $('#js-search-result').html('<p>Pas de resultats pour la recherche : <strong>' + value + '</strong>')
    }
});



// Ajoutez une balise <h1> avec la valeur 'Cats are the weirdest' dans l'article avec l'id js-article-1.
$('#js-article-1').append('<h1>Cats are the weirdest</h1>');

// Ajoutez une balise <div> dans l'article avec l'id js-article-1.
$('#js-article-1').append('<div> </div>')

// Dans la balise <div> de l'article #js-article-1 ajoutez un paragraphe avec la valeur 'He starts to look at me pleadingly, paces around, and meows insistently. He even climbs on top of the book and bites my wrists in protest.'
$('#js-article-1 div').append('<p> He starts to look at me pleadingly, paces around, and meows insistently. He even climbs on top of the book and bites my wrists in protest.</p>')

// Dans la balise <div> de l'article #js-article-1 ajoutez un autre paragraphe avec la valeur 'I recently found out that my cat, Marv, hates it when I read aloud.' avant le paragraphe ajouté précédement.
$('#js-article-1 div').prepend('<p> I recently found out that my cat, Marv, hates it when I read aloud.</p>')

// Après le premier paragraphe (entre les deux paragraphes) de l'article js-article-1 ajoutez une image.


// Avant l'article #js-article-1 ajoutez un autre article:

// <article id="js-article-3">
//   <h1>Cats are the weirdest-3</h1>
//   <p>My cat brought me two large potatoes in the middle of the night from the kitchen counter.</p>
// </article>
// Supprimez le contenu de l'article #js-article-2.

// Supprimez du DOM l'article #js-article-2.