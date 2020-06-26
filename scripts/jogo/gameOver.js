class GameOver {

    constructor(imagem, propTamanho, corDeFundo) {
        this.imagem = imagem;
        const prop = min(propTamanho * width / imagem.width, propTamanho * height / imagem.height);
        this.largura = imagem.width * prop;
        this.altura = imagem.height * prop;
        this.x = (width - this.largura) / 2.0;
        this.y = (height - this.altura) / 2.0;
        this.corDeFundo = corDeFundo;
    }

    exibe() {
        fill(this.corDeFundo);
        rect(0, 0, width, height);
        noFill();
        
        image(this.imagem,
            this.x, this.y,
            this.largura, this.altura);
    }

}
