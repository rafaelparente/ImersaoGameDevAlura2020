class Pontuacao {

    constructor(propTamanho, corDaPontuacao) {
        this.pontos = 0;
        this.textSize = propTamanho * height;
        this.x = width - 0.25 * this.textSize;
        this.y = this.textSize;
        this.corDaPontuacao = corDaPontuacao;
    }

    exibe(align = RIGHT, x = this.x, y = this.y, titulo = '') {
        textAlign(align);
        textSize(this.textSize);
        fill(this.corDaPontuacao);
        text(titulo + this.pontos.toString(), x, y);
    }

    adicionarPonto(pontos) {
        this.pontos += pontos;
    }

}
