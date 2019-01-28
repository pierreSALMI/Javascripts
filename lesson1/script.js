'use strict';

let user = 'Mathieu';
let admin;

const userStatus = 1;

let myUndefined = undefined;
let myNull = null;

admin = user;

console.log('Hello' + ' World');
const str1 = 'Hello';
const str2 = 'World';
console.log(`${str1} ${str2}`)


let a = 10 + 20;
a += 8;
console.log('a', a);

let c = 5;
console.log(c++); //c = 5
console.log(++c); // c = 7

console.log('hello' * 3); //NaN
//JS ne comprend pas les tableaux

console.log(+'3');//conversion char to number
console.log(+true);// bool to number

console.log('4' + 3);//résultat '43'
console.log(3 + 4 + '7');// 77
console.log('3' + 4 + 7);//347

console.log(2 > 1);
console.log(2 < 1);
console.log(20 >= 10);
console.log(10 >= 10);
console.log(4 != '4')//false
console.log(4 !== '4');//True
console.log(4 != 6);
console.log('2' !== 2);//True
console.log('hello' === 'hello'); //True
console.log('hello'=== 'Hello')//False


if (5 > 0 && 5 < 10){
    console.log('1')
}
else{
    console.log('2')
}

if(20/2 >= 10 || 20/2 <= 15){
    console.log('oui')
}
else{
    console.log('Non')
}

let isPrivate = true;
let isMember = false;

if (!isPrivate || isMember){
    console.log('can see the group')
}
else{
    console.log("can't see the group")
}

const today = 'lundi';
switch(today){
    case 'lundi':
        console.log(`Aujourd'hui on est ${today}`);
        break;
    case 'mardi':
        console.log(`Aujourd'hui on est ${today}`);
        break;
    case 'mecredi':
        console.log(`Aujourd'hui on est ${today}`);
        break;
    case 'jeudi':
    case 'vendredi':
        console.log("Aujourd'hui on est jeudi, venddredi");
        break;
    default:
        console.log("Aujourd'hui on est jeudi, venddredi, samedi ou dimanche")
}

let username = null;
username = prompt('what is your name');

// if (username){
//     alert("Nice to meet you", username);
// }
// else {
//     alert("Don't be shy");
// }

username ?
    alert(`Nice to meet you ${username}`) :
    alert("Don't be shy");
