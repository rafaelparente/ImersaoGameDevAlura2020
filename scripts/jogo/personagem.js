class Personagem extends AnimacaoPulante {

    constructor(imagem, numCols, numSprites, propAltura, velocidadeAnimacao, personagemPropPulo, propGravidade, precisaoDaColisao, limiteDePulo, chaoAltura, variacaoY) {        
        super(imagem, numCols, numSprites, propAltura, velocidadeAnimacao, chaoAltura, 0.0, variacaoY);

        this.yInicial = this.y;
        this.aceleracaoDoPulo = -height * personagemPropPulo;
        this.gravidade = height * propGravidade;
        this.velocidadeDoPulo = 0;
        this.baseXDeColisao = this.largura / 2.0;
        this.baseYDeColsao = this.altura / 2.0;
        this.diametroDeColisao = max(this.largura, this.altura) * precisaoDaColisao;
        this.precisaoDaColisao = precisaoDaColisao;
        this.limiteDePulo = limiteDePulo;
        this.invencivel = false;
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

    tornaInvencivel(invencivel = true) {
        this.invencivel = invencivel;
    }

    estaColidindo(inimigo) {
        if (this.invencivel) return false;

        const xDeColisaoDoInimigo = inimigo.x + inimigo.largura / 2.0;
        const yDeColisaoDoInimigo = inimigo.y + inimigo.altura / 2.0;
        const diametroDeColisaoDoInimigo = max(inimigo.largura, inimigo.altura) * precisaoDaColisao;

        return collideCircleCircle(
            this.x + this.baseXDeColisao, this.y + this.baseYDeColsao, this.diametroDeColisao,
            xDeColisaoDoInimigo, yDeColisaoDoInimigo, diametroDeColisaoDoInimigo
        )
    }

}
