class Personagem extends AnimacaoTerrestre {

    constructor(imagem, numCols, numLins, propAltura, velocidadeAnimacao, personagemPropPulo, propGravidade, precisaoDaColisao) {        
        super(imagem, numCols, numLins, propAltura, velocidadeAnimacao);

        this.yInicial = this.y;
        this.aceleracaoDoPulo = -height * personagemPropPulo;
        this.gravidade = -this.aceleracaoDoPulo * propGravidade;
        this.velocidadeDoPulo = 0;
        this.larguraDeColisao = this.largura * precisaoDaColisao;
        this.alturaDeColisao = this.altura * precisaoDaColisao;
        this.precisaoDaColisao = precisaoDaColisao;

        this.x = 0;
    }

    pula() {
        this.velocidadeDoPulo = this.aceleracaoDoPulo;
    }

    aplicaGravidade() {
        this.y += this.velocidadeDoPulo;
        this.velocidadeDoPulo += this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
        }
    }

    estaColidindo(inimigo) {
        const larguraDeColisaoDoInimigo = inimigo.largura * this.precisaoDaColisao;
        const alturaDeColisaoDoInimigo = inimigo.altura * this.precisaoDaColisao;

        return collideRectRect(
            this.x, this.y,
            this.larguraDeColisao, this.alturaDeColisao,
            inimigo.x, inimigo.y,
            larguraDeColisaoDoInimigo, alturaDeColisaoDoInimigo);
    }

}
