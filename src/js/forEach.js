// ! forEach - só itera ele não retorna nada 
// ! forEach

const redesSociais = ['facebook','instagram','twiter'];

for(let i = 0; i<redesSociais.length; i++){
    // console.log(`eu tenho perfil na rede social ${redesSociais[i]}`)
}
redesSociais.forEach(function(nomeDaRedeSocial,indice){
    // console.log(`#${indice} eu tenho perfil na rede social ${nomeDaRedeSocial}`)
})