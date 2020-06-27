class GameStart {

    constructor(texto, propTamanho, corDeFundo, corDoTexto) {
        this.texto = texto;
        this.textSize = propTamanho * height;
        this.x = width / 2.0;
        this.y = height / 2.0;
        this.corDeFundo = corDeFundo;
        this.corDoTexto = corDoTexto;
    }

    exibe() {
        fill(this.corDeFundo);
        rect(0, 0, width, height);

        textAlign(CENTER);
        textSize(this.textSize);
        fill(this.corDoTexto);
        text(this.texto, this.x, this.y);
    }

}
