class Personagem {

    constructor(imagem, numCols, numLins, propAltura, velocidade) {
        this.imagem = imagem;
        this.alturaNaImagem = imagem.height / numLins;
        this.larguraNaImagem = imagem.width / numCols;
        this.altura = height * propAltura;
        this.largura = (this.altura / this.alturaNaImagem) * this.larguraNaImagem;
        this.x = 0;
        this.y = height - this.altura;
        this.frameAtual = 0;
        this.velocidade = velocidade;
        this.frameSkip = 0;

        this.criaMatriz(numLins, numCols);
    }

    criaMatriz(numLins, numCols) {
        this.matriz = [];
        let lin = 0;

        for (; lin < numLins; ++lin) {
            let linCoord = lin * this.alturaNaImagem;
            let col = 0;

            for (; col < numCols; ++col) {
                let colCoord = col * this.larguraNaImagem;
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
            this.larguraNaImagem, this.alturaNaImagem
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
