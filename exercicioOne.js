const fs = require('fs');
// const dados = require('./dados.json');
let tarefa = process.argv[2];

fs.writeFile('EX1.txt', tarefa + '\r\n', {flag: 'a'}, function(){
    console.log(tarefa);
})