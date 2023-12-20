// ! every - ele verifica se todos os items do array satisfazem uma condição
// ! some - ele verifica se ao menos um item dentro do array satisfaz a condição

// ! every && some

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

const todosAlunosSaoDeFrontEnd = alunos2.every(function(item){
    return item.curso === "front-end"
})
// console.log(todosAlunosSaoDeFrontEnd);

const aoMenosUmAlunoDeBackEnd = alunos2.some(function(item){
    return item.curso === "back-end"
})
//  console.log(aoMenosUmAlunoDeBackEnd);



