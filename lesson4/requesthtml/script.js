'use strict'

// Récupérez l'information du profil de Han Solo (son id dans la base de données est 14). Ensuite affichez sur votre page ces données: nom, sexe, date de naissance, couleur des yeux, couleur des cheveux.

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = () => {
//   if (xhttp.readyState == 4 && xhttp.status == 200) {
//     console.log(xhttp.responseText)
//     const rawValue = xhttp.responseText;
//     const parsedValue = JSON.parse(rawValue);

//     const hanSoloData = `
//         <p>Nom: ${parsedValue.name}</p>
//         <p>Sexe: ${parsedValue.gender}</p>
//         <p>Date de naisance: ${parsedValue.birth_year}</p>
//     `

//     document.body.innerHTML = hanSoloData;
//   }
// };
// xhttp.open('GET', 'https://swapi.co/api/people/14/', true);
// xhttp.send();


// Trouvez toutes les personnes avec le nom de famille Skywalker. Affichez leur profiles sur votre page.
// let xhttp2 = new XMLHttpRequest();
// xhttp2.onreadystatechange = () => {
//   if (xhttp.readyState == 4 && xhttp2.status == 200) {
//     console.log(xhttp2.responseText)
//     const rawValue = xhttp2.responseText;
//     const parsedValue = JSON.parse(rawValue);
    
//     parsedValue.results.forEach(person => {
//         const myDiv = document.createElement('div');

//         const persondata = `
//         <p>Nom: ${person.name}</p>
//         <p>Sexe: ${person.gender}</p>
//         <p>Date de naisance: ${person.birth_year}</p>
//         `;
//         myDiv.innerHTML = persondata;
//         document.body.appendChild(myDiv);
//     });

//   }
// };
// xhttp2.open('GET', 'https://swapi.co/api/people/?search=skywalker', true);
// xhttp2.send();


// Récupérez et affichez les données de 5 planètes avec les ids suivants:

const planets = [1, 2, 3, 4, 5];

planets.forEach(planet => {
    let xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = () => {
      if (xhttp3.readyState == 4 && xhttp3.status == 200) {
        console.log(xhttp3.responseText)
        const rawValue = xhttp3.responseText;
        const parsedValue = JSON.parse(rawValue);
        const myDiv = document.createElement('div')
        const planetdata = `
        <p>Nom: ${parsedValue.name}</p>
        `;
        myDiv.innerHTML = planetdata;
        document.body.appendChild(myDiv);
      }
    };
    xhttp3.open('GET', 'https://swapi.co/api/planets/'+planet+'/', true);
    xhttp3.send();
})