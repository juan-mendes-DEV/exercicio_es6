// *arguments - é como se fosse um dicionario e se pode colocar numeros infinitos + facilmente 
// ! arguments


function somar (){
    let soma = 0;
    for(let i = 0; i<arguments.length; i++){
        soma+=arguments[i];
    }
    return soma
}
// console.log(somar(10,20,30,40,50));



// ! rest



function somarComRest(...numeros){
    const soma = numeros.reduce((total,numeroAtual)=>{
        total+=numeroAtual
        return total
    },0)
    return soma
}
// console.log(somarComRest(100,100,100,100,100))



// ! spred



const numeros = [10,20,30,40,50];
// console.log(...numeros);


const timesDeFutebolDeSp = ["santos","palmeiras","bragantino","são paulo"];
const timesDeFutebolDoRio = ["vasco","botafogo"];
// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
const timesDeFutebol = [...timesDeFutebolDeSp,...timesDeFutebolDoRio]
// console.log(timesDeFutebol) 

const carroDaJulia = {
    modelo:"gol",
    marca:"vw",
    motor:1.6
}
const carroDaAna = {
    ...carroDaJulia,
    motor:1.8
}
// console.log(carroDaAna)

// ! desestruração

const{motor: motorDoCarroDaJulia} = carroDaJulia;
const{motor: motorDoCarroDaAna} = carroDaAna;

// console.log(motorDoCarroDaJulia)
// console.log(motorDoCarroDaAna)




