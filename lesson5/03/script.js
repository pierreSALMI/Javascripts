'use strict'

var counter = 0;
$('#js-btn').click(() => {
    console.log('Clicked')
    counter++;
    if (counter > 5){
        $('#js-btn').off('click');
    }
})

// Créez un div bleu. Si on le survole, il passe en vert. Si on sort le curseur du div, il redevient bleu. Utilisez les méthodes mouseenter, mouseleave ou hover.

// $('#js-hovered').mouseenter(() => {
//     $('#js-hovered').css('background-color', 'green');
// })
// $('#js-hovered').mouseleave(() => {
//     $('#js-hovered').css('background-color', 'blue');
// })

$('#js-hovered').hover(() => {
    $('#js-hovered').css('background-color', 'green');
}, () => {
    $('#js-hovered').css('background-color', 'blue');
})

// Ajoutez un écouteur d'événement 'click' à l'objet window. Si cet événement est déclenché, ajoutez le HTML <p>Cette page a été cliquée <strong>une fois</strong></p> au body. Ajoutez un autre écouteur d'événement 'dblclick'
// Si la page a été cliquée deux fois d'affilé, remplacez le HTML du body par <p>Cette page a été cliquée <strong>deux fois d'affilé</strong></p>

$(window).click(() => {
    $('body').append('<p>Cette page a été cliquée <strong>une fois</strong></p>')
})

$(window).dblclick(() => {
    $('body').html("<p>Cette page a été cliquée <strong>deux fois d'affilé</strong></p")
})

