class Pontuacao {

    constructor(propTamanho, corDaPontuacao) {
        totalPontos = 0;
        this.textSize = propTamanho * height;
        this.x = width - 0.25 * this.textSize;
        this.y = this.textSize;
        this.corDaPontuacao = corDaPontuacao;
    }

    exibe(align = RIGHT, x = this.x, y = this.y, titulo = '') {
        textAlign(align);
        textSize(this.textSize);
        fill(this.corDaPontuacao);
        text(titulo + totalPontos.toString(), x, y);
    }

    adicionarPonto(pontos) {
        totalPontos += pontos;
    }

}
