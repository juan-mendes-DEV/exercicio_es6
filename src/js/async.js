//! programação assincronoma

function funcaoMuitoPesada(){
    let execucoes = 0;
    for( let i = 0; i < 1000000000; i++){
        execucoes++
    }
    return execucoes
}
// console.log("inicio");
// console.log(funcaoMuitoPesada());
// console.log("fim");


//TODO PARA SER EXECUTADO DE FORMA ASSINCRONOMA
const funcaoMuitoPesadaPromise = new Promise((resolve,reject)=>{//! erro para test
    try{
        let execucoes=0;
        for(let i = 0; i < 1000000000; i++){
            execucoes++
        }
        resolve(execucoes);
    }catch(e){
        reject('deu erro na iteração dos numeros')
    }
})
//  console.log('inicio')
//  funcaoMuitoPesadaPromise.then(resultado=>console.log(resultado)).catch(erro=>console.log(erro))
//  console.log('fim')

//TODO PARA ser executado de forma paralela

async function execucaoPrincipal(){
    
promiseComParametroa('juan@gmail.com',12345).then(resultado=>{
    console.log(resultado)
})
    try{
        console.log("inicio");
    const resultado = await funcaoMuitoPesadaPromise;
    console.log(resultado)
    }catch(e){
        console.log(e)
    }
}

const promiseComParametroa = (login,senha)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`logado com o usuario:${login} com a senha:${senha}`)
        },3000)
    })
}
execucaoPrincipal()