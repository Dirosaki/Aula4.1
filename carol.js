let number1 = Math.floor(Math.random() *60);
let number2 = Math.floor(Math.random() *60);
let number3 = Math.floor(Math.random() *60);
let number4 = Math.floor(Math.random() *60);
let number5 = Math.floor(Math.random() *60);
let number6 = Math.floor(Math.random() *60);

let numbers = [number1, number2, number3, number4, number5, number6];




const fs = require('fs');

fs.writeFile('diego.txt', `Os números sorteados são: ${numbers}`, function(){
    console.log(`Os números sorteados são: ${numbers}`);
})


