//! função construtora 

// function Pokemon(nomeDoPokemon,tipoDoPokemon){
//     this.nome=nomeDoPokemon;
//     this.tipo=tipoDoPokemon;

// }
// const pikachu = new Pokemon("pikachu","eletrico");
// console.log(pikachu);

//!!! Não é mais uma função é como se fosse um objeto 

class Pokemon{
    #hp =100;
    // nome='';
    // tipo='';
    exibeHp(){
        console.log(this.#hp)
    }
    constructor(nomeDoPokemon,tipoDoPokem){
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokem;

        
    }
    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
        
    }
    recebeuAtaque(){
        this.#hp -= 10;
    }
}
const pikachu = new Pokemon('pikachu','eletrico'); 
pikachu.atacar('choque do trovão')
// pikachu.recebeuAtaque();
console.log(pikachu)


class Pikachu extends Pokemon{
    constructor(){
        super('pikachu','eletrico')
    }
    atacar(){
        console.log(`${this.nome} atacou com choque do trovão `)
    }
}
const pikachuDoash = new Pikachu();
pikachuDoash.recebeuAtaque();
pikachuDoash.exibeHp()
console.log(pikachuDoash)

// pikachu.nome='pikachu'
// pikachu.tipo='eletrico'


