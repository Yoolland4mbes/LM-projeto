//let é como se fosse um var
let imagemDaEstrada;
let imagemMascote;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagensCarros;

 
function preload() {

    imagemDaEstrada = loadImage("img/estrada.png")
    imagemMascote = loadImage("img/mascote.png")
    imagemCarro1 = loadImage("img/carro-1.png")
    imagemCarro2 = loadImage("img/carro-2.png")
    imagemCarro3 = loadImage("img/carro-3.png")

    imagensCarros = [ imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
    
}

