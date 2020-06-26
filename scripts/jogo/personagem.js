class Personagem extends AnimacaoTerrestre {

    constructor(imagem, numCols, numLins, propAltura, velocidadeAnimacao, personagemPropPulo, propGravidade, precisaoDaColisao, limiteDePulo) {        
        super(imagem, numCols, numLins, propAltura, velocidadeAnimacao);

        this.yInicial = this.y;
        this.aceleracaoDoPulo = -height * personagemPropPulo;
        this.gravidade = -this.aceleracaoDoPulo * propGravidade;
        this.velocidadeDoPulo = 0;
        this.larguraDeColisao = this.largura * precisaoDaColisao;
        this.alturaDeColisao = this.altura * precisaoDaColisao;
        this.precisaoDaColisao = precisaoDaColisao;
        this.limiteDePulo = limiteDePulo;

        this.x = 0;
    }

    pula() {
        if (this.contadorDePulos >= this.limiteDePulo) {
            return false;
        }
        
        this.velocidadeDoPulo = this.aceleracaoDoPulo;
        this.contadorDePulos++;
        return true;
    }

    aplicaGravidade() {
        this.y += this.velocidadeDoPulo;
        this.velocidadeDoPulo += this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
            this.contadorDePulos = 0;
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
