const password = '123456'

const bcrypt = require('bcrypt');

let hash = bcrypt.hashSync(password, 10);

console.log(bcrypt.compareSync('123456', hash))

// Exercicio PlayGround

const hash1 = bcrypt.hashSync('123456', 10);
const password2 = '123456'
const comparaHash = bcrypt.compareSync(password2, hash1)
// Escreva seu código aqui
if(comparaHash){
    console.log('os hashes são iguais')    
}