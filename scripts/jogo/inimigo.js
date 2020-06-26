class Inimigo extends AnimacaoTerrestre {

    constructor(imagem, numCols, numLins, propAltura, velocidadeAnimacao, inimigoPropMovimentacao) {
        super(imagem, numCols, numLins, propAltura, velocidadeAnimacao);

        this.xInicial = width;
        this.velocidadeMovimentacao = width * inimigoPropMovimentacao;

        this.x = this.xInicial;
    }

    move() {
        this.x -= this.velocidadeMovimentacao;

        if (this.x <= -this.larguraSprite) {
            this.x = this.xInicial;
        }
    }

}
