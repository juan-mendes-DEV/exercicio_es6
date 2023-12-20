// ! arrow function

const minhaFuncao = ()=>{return "diz ola"}
// console.log(minhaFuncao())

const retornaUmCarro = ()=>{
    modelo='ka',
    fabricante='ford'
}

// console.log(retornaUmCarro());

const carro = {
    velocidadeAtual:50,
     acelerar: () => {
        carro.velocidadeAtual += 10
    },
    frear: function() {
        carro.velocidadeAtual -= 10
    }
}
// carro.acelerar();
// console.log(carro.velocidadeAtual)
// carro.frear();
// console.log(carro.velocidadeAtual)
