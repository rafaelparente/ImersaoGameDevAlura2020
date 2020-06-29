function setup() {
    createCanvas(windowWidth, windowHeight);
    telaInicial = new TelaInicial(imagemTelaInicial, fonteTelaInicial);
    jogo = new Jogo();
    telaFinal = new TelaFinal(imagemTelaFinal, fonteTelaFinal);
    cenas = {
        jogo,
        telaInicial,
        telaFinal,
    }
    GerenciadorDeTelaInicial._alteraCena();
}

function keyPressed() {
    cenas[cenaAtual].keyPressed(key);
}

function draw() {
    cenas[cenaAtual].draw()
}
