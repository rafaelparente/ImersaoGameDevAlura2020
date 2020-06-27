class GameStart {

    constructor(texto, propTamanho, corDeFundo, corDoTexto) {
        this.texto = texto;
        this.textSize = propTamanho * height;
        this.largura = width / 2.0;
        this.altura = height / 2.0;
        this.x = (width - this.largura) / 2.0;
        this.y = (height - this.altura) / 2.0;
        this.corDeFundo = corDeFundo;
        this.corDoTexto = corDoTexto;
    }

    exibe() {
        fill(this.corDeFundo);
        rect(0, 0, width, height);

        textAlign(CENTER);
        textSize(this.textSize);
        fill(this.corDoTexto);
        text(this.texto, this.x, this.y, this.largura, this.altura);
    }

}
