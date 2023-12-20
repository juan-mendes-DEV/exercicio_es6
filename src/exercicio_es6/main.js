// const prompt = require('prompt-sync')();

//TODO atividade do curso EBAC

const alunos =[
    {nome:'juan', nota:10},
    {nome:'maria', nota:5},
    {nome:'noemy', nota:8},
    {nome:'pablo', nota:4},
    {nome:'mendes', nota:2}
];
const nomes = alunos.filter(function(aluno){
    return aluno.nota > 6
})
console.log(nomes);

// let notasDosAlunosComMaisDeSeis=[];
// let nomeDosAlunosComMaisDeSeis=[];
// let nomeAluno;
// let notaAluno;
// for(let i = 0; i<5; i++){
//     nomeAluno = prompt('Qual é o seu nome?');
//     notaAluno = prompt('Qual é o sua nota?');

//     if(isNaN(notaAluno)) {
//         console.log("digite a nota corretamente")
//         notaAluno = prompt('Qual é o sua nota?');

//         if(isNaN(notaAluno)){
//             console.log("*******encerrando programa por falta de dados corretos******")
//             break;
//         }    
//         notaAluno = prompt('Qual é o sua nota?');

//         if(notaAluno > 6){
//             notasDosAlunosComMaisDeSeis.push(nomeAluno)
//             console.log(`${nomeAluno} ok!!`)
//         }
//     }
//     if(notaAluno > 6){
//         notasDosAlunosComMaisDeSeis.push(notaAluno);
//         nomeDosAlunosComMaisDeSeis.push(nomeAluno)
//     }

// }


// console.log('alunos com nota acima da média:')
// console.log(`alunos: ${nomeDosAlunosComMaisDeSeis}, notas:${notasDosAlunosComMaisDeSeis}`);
