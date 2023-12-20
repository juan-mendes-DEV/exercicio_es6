//! map é como se fosse um dicionario 
//! de conjunto e valor ===> Map(1) { 'nome' => 'juan' }

let meuMap = new Map();
meuMap.set("nome","juan");
// console.log(meuMap);

const nome = meuMap.get("nome");
// console.log(nome); //* retorno do valor 
// console.log(meuMap.size); //* retorna a quantidade de objetos dentro de um atributo
 
//!tambem podemos verificar se determinada chave existe dentro de um map
// console.log(meuMap.has("nome"));//retorna true ou false      

// meuMap.clear();//*para limpar meu map
// console.log(meuMap.size);

meuMap.set("stack","html, css, js")//* para adicionar uma nova chave e seus valores no map

for(let chave of meuMap.keys()){//*keys para a chave
    // console.log(chave)
}
for(let chave of meuMap.values()){//*values para os valores
    // console.log(chave)
}

// entrada do Map ===> item 

for(let entrada of meuMap.entries()){
    // console.log(entrada);
}

//! podemos fazer desestruturação tambem 

for(let [chave,valor] of meuMap.entries()){
    // console.log(` ${chave}: ${valor}`);
}

//! remover item dentro do map 
//* meuMap.delete("stack");
// console.log(meuMap)

//TODO  ==>  set os valores não podem repetir dentro de um set 


const cpfs = new Set();
cpfs.add('9999999999');
cpfs.add('8888888888');
cpfs.add('7777777777');
// console.log(cpfs);
// console.log(cpfs.keys());
// console.log(cpfs.values());

cpfs.forEach((valor)=>{ //! para retornar os valores 
    // console.log(valor)
})

//! listagem de itens unicos 
const array = ['juan','juan','juan','pablo','pablo','pablo','mendes','mendes','mendes'];
const arrayComoSet = new Set([...array]);//! retorna os itens sem se repetir otimos para cpfs
// console.log(arrayComoSet)
const arraySemItensRepetidos = [...arrayComoSet];//! retorna os itens que não são repetidos no array
console.log(arraySemItensRepetidos);


