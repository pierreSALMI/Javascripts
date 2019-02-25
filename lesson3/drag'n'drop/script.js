
// const dropZone = document.querySelector('#js-drop-to')
// const draggable = document.querySelector('#js-draggable')

// draggable.addEventListener('dragstart',event => {
//     event.dataTransfer.setData('text',event.target.id)
// })

// dropZone.addEventListener('dragover',event => {
//     event.preventDefault();
// })

// dropZone.addEventListener('drop',event => {
//     event.preventDefault()
//     const data = event.dataTransfer.getData('text')
//     const el = document.getElementById(data)
//     dropZone.appendChild(el)
// })

'use strict';

const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg']; //déclaration des format d'image accepté
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb déclaration de la taille max d'une image

//selection des id utilisé
const dropZone = document.querySelector('#js-drop-to');
const filesList = document.querySelector('#js-file-list');

//déclaration d'event
dropZone.addEventListener('dragover', (e) => onDragOver(e));
dropZone.addEventListener('drop', (e) => onDrop(e));
dropZone.addEventListener('dragover', () => changeDropZoneState(true));
dropZone.addEventListener('dragleave', () => changeDropZoneState(false));

//annule le comportement par default
function onDragOver(event) {
  event.stopPropagation();
  event.preventDefault();
}


function onDrop(e) {
  //annule le comportement par default
  e.stopPropagation();
  e.preventDefault();

  filesList.innerHTML = '';
  const filesUploaded = Array.from(e.dataTransfer.files); //téléchargement du fichier drop
  filesUploaded.forEach((file, index) => handleUploadedFile(file, index)); // appelle des events handleUploadedFile et changeDropZoneState
  changeDropZoneState(false);
}

// changement de couleur quand un fichier survol la drop zone
function changeDropZoneState(isDragging) {
  isDragging ? 
    dropZone.classList.add('js-is-dragged-over') : //ajout de la class
    dropZone.classList.remove('js-is-dragged-over'); //supprime la class
}

function handleUploadedFile(file, index) {
  const error = getUploadError(file); //verification de la validité de l'image
  error ? // si il y a une erreur 
    console.warn(`"${file.name}" Upload Error: ${error}`) : //envoie d'un message d'erreur
    filesList.appendChild(createListEl(file, index)); //sinon création de l'image
}

//création d'une liste pour ajouter les images sur le HTML
function createListEl(file, index) {
  const el = document.createElement('li'); //création de la balise <li> pour la liste
  el.setAttribute('id', 'file-list-item-'+index); 
  el.className = 'list-group-item file-list-item'; //ajour d'une class

  // ajour de l'image drop sur HTML
  const elPreview = document.createElement('img'); //création balise img
  elPreview.classList.add('file-list-item-preview'); //ajout d'un élément dans la liste
  el.appendChild(elPreview); //ajout de l'image
  renderImage(file, 'file-list-item-'+index); //création de l'image sur le HTML

  // ajout du nom de l'image drop sur HTML
  const elName = document.createElement('p'); //création balise p (paragraphe)
  elName.classList.add('file-list-item-name'); //ajout d'un élément dans la liste
  elName.innerText = file.name; //ajout du nom de l'image
  el.appendChild(elName); //création du nom de l'image sur le HTML

  return el;
}

function renderImage(file, elId) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.querySelector(`#${elId} img`);
    img.setAttribute('src', e.target.result);
  }
  reader.readAsDataURL(file);
}

// vérification de l'image
function getUploadError(file) {
  if (file.size > MAX_IMG_SIZE) { //verification de la taille de l'image par rapport à la taille max
    return 'Your image is too big';
  } else if (!ACCEPTED_FORMATS.includes(file.type)) { //verification du format
    return 'Image of this format is not accepted';
  } else {
    return;
  }
}