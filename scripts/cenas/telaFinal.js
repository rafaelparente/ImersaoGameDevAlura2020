class TelaFinal {

    constructor(imagem, propTamanho, corDeFundo, texto, propTamanhoDoTexto, corDoTexto, propPosicaoTexto) {
        this.imagem = imagem;
        const prop = min(propTamanho * width / imagem.width, propTamanho * height / imagem.height);
        this.largura = imagem.width * prop;
        this.altura = imagem.height * prop;
        this.x = (width - this.largura) / 2.0;
        this.y = (height - this.altura) / 2.0;
        this.corDeFundo = corDeFundo;

        this.texto = texto;
        this.textSize = propTamanhoDoTexto * height;
        this.xDoTexto = width / 2.0;
        this.yDoTexto = height * propPosicaoTexto;
        this.corDoTexto = corDoTexto;
    }

    exibe() {
        fill(this.corDeFundo);
        rect(0, 0, width, height);
        
        image(this.imagem,
            this.x, this.y,
            this.largura, this.altura);

        textAlign(CENTER);
        textSize(this.textSize);
        fill(this.corDoTexto);
        text(this.texto, this.xDoTexto, this.yDoTexto);
    }

    setup() {

    }

    keyPressed(key) {

    }

    draw() {
        fill(this.corDeFundo);
        rect(0, 0, width, height);
        
        image(this.imagem,
            this.x, this.y,
            this.largura, this.altura);

        textAlign(CENTER);
        textSize(this.textSize);
        fill(this.corDoTexto);
        text(this.texto, this.xDoTexto, this.yDoTexto);
    }

}
