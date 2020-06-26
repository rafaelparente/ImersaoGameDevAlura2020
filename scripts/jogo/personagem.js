class Personagem extends AnimacaoPulante {

    constructor(imagem, numCols, numSprites, propAltura, velocidadeAnimacao, personagemPropPulo, propGravidade, precisaoDaColisao, limiteDePulo, chaoAltura, variacaoY) {        
        super(imagem, numCols, numSprites, propAltura, velocidadeAnimacao, chaoAltura, 0.0, variacaoY);

        this.yInicial = this.y;
        this.aceleracaoDoPulo = -height * personagemPropPulo;
        this.gravidade = height * propGravidade;
        this.velocidadeDoPulo = 0;
        this.larguraDeColisao = this.largura * precisaoDaColisao;
        this.alturaDeColisao = this.altura * precisaoDaColisao;
        this.precisaoDaColisao = precisaoDaColisao;
        this.limiteDePulo = limiteDePulo;
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

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
            this.contadorDePulos = 0;
        }
        else {
            this.velocidadeDoPulo += this.gravidade;
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
