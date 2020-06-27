class Inimigo extends Animacao {

    constructor(imagem, numCols, numSprites, propAltura, velocidadeAnimacao, inimigoPropMovimentacao, chaoAltura, variacaoY, valorEmPontos) {
        super(imagem, numCols, numSprites, propAltura, velocidadeAnimacao, chaoAltura, 1.0, variacaoY);

        this.xInicial = this.x;
        this.alteraVelocidadeMovimentacao(inimigoPropMovimentacao);
        this.valorEmPontos = valorEmPontos;
    }

    alteraVelocidadeMovimentacao(inimigoPropMovimentacao) {
        this.velocidadeMovimentacao = width * inimigoPropMovimentacao;
    }

    move() {
        this.x -= this.velocidadeMovimentacao;

        if (this.x <= -this.larguraSprite) {
            this.x = this.xInicial;
            return this.valorEmPontos;
        }

        return 0;
    }

}
