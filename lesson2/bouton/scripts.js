'use strict';

const myBtn = document.querySelector('#js-btn');
myBtn.addEventListener('click', (event) => {
    console.log('Clicked',event)
});

constmyGrayBtn = document.querySelector('#js-gray-btn');
myGrayBtn.addEventListener('click', () => {
    myGrayBtn.style.backgroundColor = 'green';
});