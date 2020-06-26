class Pontuacao {

    constructor(propTamanhoPontuacaoCenario, corDaPontuacao) {
        this.pontos = 0;
        this.textSize = propTamanhoPontuacaoCenario * height;
        this.x = width - 0.25 * this.textSize;
        this.y = this.textSize;
        this.corDaPontuacao = corDaPontuacao;
    }

    exibe(align = RIGHT, x = this.x, y = this.y) {
        textAlign(align);
        textSize(this.textSize);
        fill(this.corDaPontuacao);
        text(this.pontos, x, y);
    }

    adicionarPonto(pontos) {
        this.pontos += pontos;
    }

}
