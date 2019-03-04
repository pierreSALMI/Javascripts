'use strict'

// Utilisez le HTML ci-dessus. Affichez l'alerte si le bouton #js-show-alert est cliqué. Cachez-la si le bouton #js-hide-alert est cliqué.
$('#js-show-alert').click(() => {
    $('#js-alert').show();
})

$('#js-hide-alert').click(() => {
    $('#js-alert').hide();
})

// Utilisez le HTML ci-dessus. Si le bouton radio 'Jedi' est sélectionné, montrez l'alerte. Sinon cachez-la.
$('#js-jedi').click(() => {
    $('#js-jedi-alert').show();
})

$('#js-sith').click(() => {
    $('#js-jedi-alert').hide();
})

// Utilisez les méthodes slideUp, slideDown ou slideToggle pour afficher/cacher la bannière .js-slide-example-links sous le paragraphe #js-slide-example-1 si celui-ci est cliqué.
$('#js-slide-example-address').click(() => {
    // $('#js-slide-example-links').slideToggle();
    $('#js-slide-example-links').fadeToggle();
})

// Au clique sur le bouton avec l'id js-btn-fade-in faites apparaître le div avec l'animation fondu (fade in). Au clique sur le bouton avec l'id js-btn-fade-out faites disparaître le div avec l'animation fondu (fade out).
$('#js-btn-fade-in').click(() => {
    $('#js-div-fade-in-out').fadeIn();
})

$('#js-btn-fade-out').click(() => {
    $('#js-div-fade-in-out').fadeOut();
})


// fonctionne pas
// $('#js-div-1').click(() => {
//     $('#js-div-1').css("opacity: 1")
// })



// Gérer l'animation
$('#js-animation-1')
    .delay(300)
    .animate({
        left:'300px',
        width: '200px'
    }, 700)
    .animate({
        height: '400px'
    });