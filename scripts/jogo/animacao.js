class Animacao {
    
    constructor(imagem, numCols, numSprites, propAltura, velocidadeAnimacao, chaoAltura, variacaoX, variacaoY) {
        this.imagem = imagem;
        this.alturaSprite = imagem.height / Math.ceil(numSprites / numCols);
        this.larguraSprite = imagem.width / numCols;
        this.altura = height * propAltura;
        this.largura = (this.altura / this.alturaSprite) * this.larguraSprite;
        this.x = 0.0 + variacaoX * width;
        this.y = max(0.0, chaoAltura - this.altura) + variacaoY * height;
        this.frameAtual = 0;
        this.velocidadeAnimacao = velocidadeAnimacao;
        this.frameSkip = 0;

        this.criaMatriz(numSprites, numCols);
    }

    criaMatriz(numSprites, numCols) {
        this.matriz = [];
        let lin = 0;
        let col = 0;
        let linCoord = lin * this.alturaSprite;

        while (this.matriz.length < numSprites) {
            const colCoord = col * this.larguraSprite;
            this.matriz.push([colCoord, linCoord]);

            if (++col >= numCols) {
                col = 0;
                linCoord = ++lin * this.alturaSprite;
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
        this.frameSkip = ++this.frameSkip % this.velocidadeAnimacao;
        
        if (this.frameSkip == 0) {
            this.frameAtual = ++this.frameAtual % this.matriz.length;
        }
    }

}
