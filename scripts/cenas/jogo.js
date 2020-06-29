class Jogo {

    constructor() {
    }

    setup() {
        this.inimigoAtual = 0;

        this.cenario = new Cenario(imagemCenario, velocidadeAnimacao);
        this.personagem = new Personagem(imagemPersonagem,
            numColsDeImagemPersonagem, numSpritesDeImagemPersonagem, personagemPropAltura,
            velocidadeAnimacao, personagemPropPulo, propGravidade, precisaoDaColisao, personagemLimiteDePulo, height, personagemVariacaoY);
        this.pontuacao = new Pontuacao(propTamanhoPontuacaoCenario, corDaPontuacao);
        
        const inimigo = new Inimigo(imagemInimigo,
            numColsDeImagemInimigo, numSpritesDeImagemInimigo, inimigoPropAltura,
            velocidadeAnimacao, inimigoPropMovimentacao, height, inimigoVariacaoY, inimigoValorEmPontos);
        const inimigoGrande = new Inimigo(imagemInimigoGrande,
            numColsDeImagemInimigoGrande, numSpritesDeImagemInimigoGrande, inimigoGrandePropAltura,
            velocidadeAnimacao, inimigoGrandePropMovimentacao, height, inimigoGrandeVariacaoY, inimigoGrandeValorEmPontos);
        const inimigoVoador = new Inimigo(imagemInimigoVoador,
            numColsDeImagemInimigoVoador, numSpritesDeImagemInimigoVoador, inimigoVoadorPropAltura,
            velocidadeAnimacao, inimigoVoadorPropMovimentacao, 0.0, inimigoVoadorVariacaoY, inimigoVoadorValorEmPontos);
        this.inimigos = [inimigo, inimigoGrande, inimigoVoador];

        somDoJogo.stop();
        somDoJogo.setVolume(0.0);
        somDoJogo.loop();
        somDoJogo.setVolume(1.0, tempoDeFadeDoSomDeFundo);
    }

    keyPressed(key) {
        if (key === ' ' &&
            this.personagem.pula()) {
            somDoPulo.play();
        }
    }

    draw() {
        this.cenario.exibe();
        this.cenario.anima();

        this.personagem.exibe();
        this.personagem.aplicaGravidade();

        const inimigo = this.inimigos[this.inimigoAtual];
        inimigo.exibe();
        const pontos = inimigo.move();
        
        if (pontos > 0) {
            this.pontuacao.adicionarPonto(pontos);
            this.pontuacao.exibe();
            
            this.inimigoAtual = Math.floor(Math.random() * this.inimigos.length);
            this.inimigos[this.inimigoAtual].alteraVelocidadeMovimentacao(random(0.01, 0.02));
            return;
        }

        if (this.personagem.estaColidindo(inimigo)) {
            GerenciadorDeTelaFinal._alteraCena();
            somDoJogo.setVolume(0.0, tempoDeFadeDoSomDeFundo);
        }
        else {
            this.pontuacao.exibe();
        }
    }

}
