class Personagem extends Animacao {

    constructor(imagem, numCols, numLins, propAltura, velocidadeAnimacao) {        
        super(imagem, numCols, numLins, propAltura, velocidadeAnimacao);

        this.yInicial = height - this.altura

        this.x = 0;
        this.y = this.yInicial;

        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
    }

    pula() {
        this.velocidadeDoPulo = -42;
    }

    aplicaGravidade() {
        this.y += this.velocidadeDoPulo;
        this.velocidadeDoPulo += this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
        }
    }

    estaColidindo(inimigo) {
        const precisao = .7;

        return collideRectRect(
            this.x, this.y,
            this.largura * precisao, this.altura * precisao,
            inimigo.x, inimigo.y,
            inimigo.largura * precisao, inimigo.altura * precisao);
    }

}
