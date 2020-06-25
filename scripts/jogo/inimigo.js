class Inimigo extends Animacao {

    constructor(imagem, numCols, numLins, propAltura, velocidadeAnimacao, velocidadeMovimentacao) {
        super(imagem, numCols, numLins, propAltura, velocidadeAnimacao);

        this.resetaX();
        this.y = height - this.altura;

        this.velocidadeMovimentacao = velocidadeMovimentacao;
    }

    resetaX() {
        this.x = width;
    }

    move() {
        this.x -= this.velocidadeMovimentacao;

        if (this.x <= -this.larguraSprite) {
            this.resetaX();
        }
    }

}
