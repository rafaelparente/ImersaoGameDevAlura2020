class AnimacaoPulante extends Animacao {

    constructor(imagem, numCols, numSprites, propAltura, velocidadeAnimacao, chaoAltura, variacaoX, variacaoY) {
        super(imagem, numCols, numSprites, propAltura, velocidadeAnimacao, chaoAltura, variacaoX, variacaoY);

        this.contadorDePulos = 0;
    }

}
