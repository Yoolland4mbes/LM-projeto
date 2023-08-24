
//posicoes dos carros  
// let xCarros1 = 520;
// let xCarros2 = 520;
// let xCarros3 = 520;

let xCarros = [599, 599, 599, 599, 599, 599]
let yCarros = [50, 100, 150, 200, 250, 300]

let comprimentoCarros=60;
let alturaCarros=40;
let velocidadeCarros = [2, 3.8, 4, 2.6, 4.9, 9]





function mostrarCarros() {
for (let i = 0; i < imagensCarros.length; i++) {
   image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
}
    // image(imagemCarro1, xCarros1, 40, comprimentoCarros, )
    // image(imagemCarro2, xCarros2, 100, 60, 40)
    // image(imagemCarro3, xCarros3, 147, 60, 40)
}

function movimentoCarro (){

for (let i = 0; i < imagensCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
    

    if(xCarros[i] < -50){
        xCarros[i] = 700
    }
}

    
  
}
