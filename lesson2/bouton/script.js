'use strict';

const myBtn = document.querySelector('#js-btn');
myBtn.addEventListener('click', (event) => {
    console.log('Clicked',event)
});

let isClickedTwice = false;
const myGrayBtn = document.querySelector('#js-gray-btn');
myGrayBtn.addEventListener('click', () => {
    isClickedTwice = !isClickedTwice;
    if(isClickedTwice){
        myGrayBtn.style.backgroundColor = 'green';
    }else {
        myGrayBtn.style.backgroundColor = 'red';
    }
});

const hoveredBtn = document.querySelector('#js-hovered-btn');
hoveredBtn.addEventListener('mouseenter', () => {
    hoveredBtn.style.backgroundColor = 'red';
});
hoveredBtn.addEventListener('mouseleave', () => {
    hoveredBtn.style.backgroundColor = 'initial';
});

window.addEventListener('contextmenu', (event) => {
    console.log('Get right CLICKED')
});

const myForm = document.querySelector('#js-form');
const myInput = document.querySelector('#js-input')
myInput.addEventListener('keyup', (e)=> {
    console.log('e',e);
    console.log('input value:', myInput.value);
})

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(`your input is ${myInput.value}`)
})