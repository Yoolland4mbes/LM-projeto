let yMascote = 360;
let xMascote = 70;
let meusPontos = 0;
let colidiu = 0;


function mostrarMascote() {
    image(imagemMascote, xMascote, yMascote, 40, 40); 
     
}







function incluirPontos() {
    text(meusPontos, 20,25)
    fill(color(225,0,0))
    textSize(21)

    if (yMascote < 0){
        yMascote = 360;
        meusPontos ++;
    }
}






function movimentoMascote() {
    if(keyIsDown(UP_ARROW)){
        yMascote -=3;
    }
    
    if(keyIsDown(DOWN_ARROW)){
            yMascote +=3;
        }

        if(keyIsDown(RIGHT_ARROW)){
            xMascote +=3;
        }

        if(keyIsDown(LEFT_ARROW)){
            xMascote -=3;
        }
  
        
}

function Colisao() {
    colidiu = collideRectCircle(xCarros, yCarros, comprimentoCarros, alturaCarros, xMascote, yMascote, 10 );
    if (colidiu >0) {
        meusPontos *= -1;
    }
    
}

