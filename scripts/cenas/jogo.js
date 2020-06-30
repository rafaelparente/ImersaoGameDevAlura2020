class Jogo {

    constructor() {
    }

    setup() {
        this.inimigoAtual = 0;

        this.cenario = new Cenario(imagemCenario, velocidadeAnimacao);
        this.vida = new Vida(imagemVida, maximoDeVidas, vidasIniciais, propTamanhoVida, propMargemVida);
        this.pontuacao = new Pontuacao(propTamanhoPontuacaoCenario, corDaPontuacao);
        this.personagem = new Personagem(imagemPersonagem,
            numColsDeImagemPersonagem, numSpritesDeImagemPersonagem, personagemPropAltura,
            velocidadeAnimacao, personagemPropPulo, propGravidade, precisaoDaColisao, personagemLimiteDePulo, height, personagemVariacaoY);
        
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
            this.personagem.tornaInvencivel(false);
            this._mudaInimigo();
        }
        else if (this.personagem.estaColidindo(inimigo)) {
            this.vida.perdeVida();

            if (this.vida.vidas == 0) {
                GerenciadorDeTelaFinal._alteraCena();
                somDoJogo.setVolume(0.0, tempoDeFadeDoSomDeFundo);
                return;
            }

            this.personagem.tornaInvencivel();
        }

        this.vida.exibe();
        this.pontuacao.exibe();
    }

    _mudaInimigo() {
        this.inimigoAtual = Math.floor(Math.random() * this.inimigos.length);
        this.inimigos[this.inimigoAtual].alteraVelocidadeMovimentacao(random(0.01, 0.02));
    }

}
