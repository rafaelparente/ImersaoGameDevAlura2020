class TelaFinal {

    constructor(imagem, fonte) {
        this.imagem = imagem;
        this.fonte = fonte;

        const prop = min(0.75 * width / imagem.width, 0.75 * height / imagem.height);
        this.largura = imagem.width * prop;
        this.altura = imagem.height * prop;
        this.x = (width - this.largura) / 2.0;
        this.y = (height - this.altura) / 2.0;
    }

    setup() {
        fill('rgba(0, 0, 0, 0.5)');
        rect(0, 0, width, height);

        this.botao = new BotaoGerenciadorDeJogoDaTelaFinal('Reiniciar', width / 2.0, height / 7.0 * 6.0);
    }

    keyPressed(key) {

    }

    draw() {      
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo() {
        image(this.imagem,
            this.x, this.y,
            this.largura, this.altura);
    }

    _texto() {
        textFont(this.fonte);
        textAlign(CENTER);
        fill('#fff');

        textSize(0.1 * height);
        text('TOTAL DE PONTOS',
            width / 2.0,
            height / 7.0 * 1.0);
        text(totalPontos,
            width / 2.0,
            height / 7.0 * 2.0);

        textSize(0.05 * height);
        text('Obrigado por jogar!',
            width / 2.0,
            height / 7.0 * 5.0);
    }

    _botao() {
        this.botao.draw();
    }

}
