
//codigo do carro

//código do carro

let xCarros = [700, 700, 700, 700, 700, 700];
let yCarros = [40, 105, 150, 210, 270, 318]; 
let velocidadeCarros = [3, 4.5, 5.2, 5, 3.7, 6.8];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
        }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 701;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}

