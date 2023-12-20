// ! filter - para filtrar items de um array 
// ! reduce - para reduzir os items de um array 

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

// ! filter



const alunosDeBackEnd = alunos2.filter(function(item){
    return item.curso === "back-end"
})
// console.log(alunosDeBackEnd);

const alunosDeFrontEnd = alunos2.filter(function(item){
    return item.curso === "front-end"
})
// console.log(alunosDeFrontEnd);


// ! reduce


const nums = [10,20,30,40,50,60,70,80,90,100];
const soma = nums.reduce(function(acumulador,itemAtual){
    acumulador+=itemAtual
    return acumulador
},0);

// console.log(soma);

const nomeDosAlunos = alunos2.reduce(function(acumulador,itemAtual){
    acumulador+=` ${itemAtual.nome} `
    return acumulador
},'')
//  console.log(nomeDosAlunos);
