class TelaInicial {

    constructor(imagem, fonte) {
        this.imagem = imagem;
        this.fonte = fonte;
    }

    setup() {
        this.botao = new BotaoGerenciadorDeJogoDaTelaInicial('Iniciar', width / 2.0, height / 5.0 * 4.0);
    }

    keyPressed(key) {
        
    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo() {
        image(this.imagem, 0, 0, width, height);
    }

    _texto() {
        textFont(this.fonte);
        textAlign(CENTER);
        fill('#000');

        textSize(0.1 * height);
        text('As aventuras de',
            width / 2.0,
            height / 5.0 * 2.0);

        textSize(0.2 * height);
        text('Ripsta!',
            width / 2.0,
            height / 5.0 * 3.0);
    }

    _botao() {
        this.botao.draw();
    }

}
