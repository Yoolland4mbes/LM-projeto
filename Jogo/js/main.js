

//na função setup, define-se as configuracoes de largura e altura
function setup() {

createCanvas(700, 400);

}
//na funçao draw define-se o que sera exibido 
function draw() {
    background(imagemDaEstrada);   

    //o image permite definir largura, altura eixo X e eixo Y
       
    mostrarCarros()
    movimentoCarro();
    movimentoMascote();
    mostrarMascote();
    incluirPontos();
    Colisao();
    
}

