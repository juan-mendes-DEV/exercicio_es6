// ! map - itera , modifica e pode retornar o array modificado 
// ! find - a gente consegue encontrar um item dentro do array 
// ! findIndex - retorna o indice de um item dentro do array
// ! map

const alunos = ['juan', 'pablo', 'mendes', 'mendes'];
const alunos2 = alunos.map(function(itemAtual){
    itemAtual={
        nome:itemAtual,
        curso:'front-end'
    }
    return itemAtual;
})
alunos2.push({
    nome:"noemy",
    curso:"back-end"
})
// console.log(alunos2)

// const numeros =[10,20,30,40,50];
// const dobroDosNumeros=numeros.map(function(numeroAtual){
//     numeroAtual = numeroAtual * 2;
//     return numeroAtual;
// })
// console.log(dobroDosNumeros);


// ! find && findIndex


const juan =alunos2.find(function(item){
    return item.nome=="juan"
})
// console.log(juan);

const indiceDoJuan = alunos2.findIndex(function(item){
    return item.nome=="juan"
})
// console.log(indiceDoJuan);