class Jogo {

    constructor() {
        this.estaDesenhando = false;
        this.inimigoAtual = 0;
    }

    setup() {
        cenario = new Cenario(imagemCenario, velocidadeAnimacao);
        personagem = new Personagem(imagemPersonagem,
            numColsDeImagemPersonagem, numSpritesDeImagemPersonagem, personagemPropAltura,
            velocidadeAnimacao, personagemPropPulo, propGravidade, precisaoDaColisao, personagemLimiteDePulo, height, personagemVariacaoY);
        pontuacao = new Pontuacao(propTamanhoPontuacaoCenario, corDaPontuacao);
        
        const inimigo = new Inimigo(imagemInimigo,
            numColsDeImagemInimigo, numSpritesDeImagemInimigo, inimigoPropAltura,
            velocidadeAnimacao, inimigoPropMovimentacao, height, inimigoVariacaoY, inimigoValorEmPontos);
        const inimigoGrande = new Inimigo(imagemInimigoGrande,
            numColsDeImagemInimigoGrande, numSpritesDeImagemInimigoGrande, inimigoGrandePropAltura,
            velocidadeAnimacao, inimigoGrandePropMovimentacao, height, inimigoGrandeVariacaoY, inimigoGrandeValorEmPontos);
        const inimigoVoador = new Inimigo(imagemInimigoVoador,
            numColsDeImagemInimigoVoador, numSpritesDeImagemInimigoVoador, inimigoVoadorPropAltura,
            velocidadeAnimacao, inimigoVoadorPropMovimentacao, 0.0, inimigoVoadorVariacaoY, inimigoVoadorValorEmPontos);
        inimigos.push(inimigo, inimigoGrande, inimigoVoador);
    }

    keyPressed(key) {
        if (key === ' ' &&
            this.estaDesenhando &&
            personagem.pula()) {
            somDoPulo.play();
        }
    }

    draw() {
        cenario.exibe();
        cenario.anima();

        personagem.exibe();
        personagem.aplicaGravidade();

        const inimigo = inimigos[this.inimigoAtual];
        inimigo.exibe();
        const pontos = inimigo.move();
        
        if (pontos > 0) {
            pontuacao.adicionarPonto(pontos);
            this.inimigoAtual = Math.floor(Math.random() * inimigos.length);
            inimigos[this.inimigoAtual].alteraVelocidadeMovimentacao(random(0.01, 0.02));
        }

        if (personagem.estaColidindo(inimigo)) {
            this.estaDesenhando = false;
        }

        if (this.estaDesenhando) {
            pontuacao.exibe();
        }
        else if (!this.estaIniciado()) {
            telaInicial.exibe();
        }
        else {
            return false;
        }

        return true;
    }

    estaIniciado() {
        return somDoJogo.isLooping();
    }

    iniciaJogo() {
        this.estaDesenhando = true;
        somDoJogo.loop();
    }

    encerraJogo() {
        telaFinal.exibe();
        pontuacao.exibe(CENTER, width / 2.0, height * propPosicaoPontuacaoDeTelaFinal, textoDePontuacaoTelaFinal);
        somDoJogo.setVolume(0, tempoDeFadeDoSomDeFundo);
    }

}
