class Animacao {
    
    constructor(imagem, numCols, numLins, propAltura, velocidadeAnimacao) {
        this.imagem = imagem;
        this.alturaSprite = imagem.height / numLins;
        this.larguraSprite = imagem.width / numCols;
        this.altura = height * propAltura;
        this.largura = (this.altura / this.alturaSprite) * this.larguraSprite;
        this.frameAtual = 0;
        this.velocidade = velocidadeAnimacao;
        this.frameSkip = 0;

        this.criaMatriz(numLins, numCols);
    }

    criaMatriz(numLins, numCols) {
        this.matriz = [];
        let lin = 0;

        for (; lin < numLins; ++lin) {
            let linCoord = lin * this.alturaSprite;
            let col = 0;

            for (; col < numCols; ++col) {
                let colCoord = col * this.larguraSprite;
                this.matriz.push([colCoord, linCoord]);
            }
        }
    }

    exibe() {
        image(
            this.imagem,
            this.x, this.y,
            this.largura, this.altura,
            this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1],
            this.larguraSprite, this.alturaSprite
        );
        
        this.atualizaFrame();
    }

    atualizaFrame() {
        this.frameSkip = ++this.frameSkip % this.velocidade;
        
        if (this.frameSkip == 0) {
            this.frameAtual = ++this.frameAtual % this.matriz.length;
        }
    }

}
