function setup() {
    createCanvas(windowWidth, windowHeight);
    telaInicial = new TelaInicial(textoDeTelaInicial, propTamanhoTelaInicial, corDeFundoTelaDeTelaInicial, corDeTelaInicial);
    jogo = new Jogo();
    telaFinal = new TelaFinal(imagemTelaFinal, propTamanhoTelaDeTelaFinal, corDeFundoTelaDeTelaFinal, textoDeTelaFinal, propTamanhoTelaFinalTexto, corDeTelaFinalTexto, propPosicaoTextoDeTelaFinal);
    cenas = {
        'jogo':jogo,
        'telaInicial':telaInicial,
        'telaFinal':telaFinal,
    }
    cenas[cenaAtual].setup();
    noLoop();
}

function keyPressed() {
    if (key === ' ' && !jogo.estaIniciado()) {
        jogo.iniciaJogo();
        loop();
    }

    cenas[cenaAtual].keyPressed(key);
}

function draw() {
    if (!cenas[cenaAtual].draw()) {
        jogo.encerraJogo();
        noLoop();
    }
}
