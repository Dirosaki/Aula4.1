
let sorteio=[];


for (i=0;i<6;i++) {
    sorteio[i]=Math.floor(Math.random() *60);
    // if(sorteio.indexOf[i])()      
}


const fs = require('fs');

fs.writeFile('carol.txt', `Os números sorteados são: ${sorteio}`, function(){
    console.log(`Os números sorteados são: ${sorteio}`);
})