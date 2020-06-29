class BotaoGerenciadorDeJogoDaTelaFinal extends BotaoGerenciadorDeJogo {

    constructor(texto, x, y) {
        super(texto, x, y);
        this.botao.addClass('botao-jogo');
    }

    draw() {
        super.draw();
        this.botao.center('horizontal');
    }

    _alteraCena() {
        super._alteraCena();
    }

}
