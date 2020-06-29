class BotaoGerenciadorDeJogo {

    constructor(texto, x, y) {
        this.botao = createButton(texto);
        this.botao.position(x, y);
        this.botao.mousePressed(() => this._alteraCena());
        this.x = x;
        this.y = y;
    }

    draw() {
        this.botao.position(this.x, this.y);
    }

    _alteraCena() {
        this.botao.remove();
        GerenciadorDeJogo._alteraCena();
    }

}
