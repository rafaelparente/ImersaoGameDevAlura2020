class Jogo {

    constructor() {
    }

    setup() {
        this.cenario = new Cenario(imagemCenario, velocidadeAnimacao);
        this.vida = new Vida(imagemVida, fita.config.maximoDeVidas, fita.config.vidasIniciais, propTamanhoVida, propMargemVida);
        this.pontuacao = new Pontuacao(propTamanhoPontuacaoCenario, corDaPontuacao);
        this.personagem = new Personagem(imagemPersonagem,
            numColsDeImagemPersonagem, numSpritesDeImagemPersonagem, personagemPropAltura,
            velocidadeAnimacao, fita.config.personagemPropPulo, fita.config.propGravidade, precisaoDaColisao, fita.config.personagemLimiteDePulo, height, personagemVariacaoY);
        
        const inimigo = new Inimigo(imagemInimigo,
            numColsDeImagemInimigo, numSpritesDeImagemInimigo, inimigoPropAltura,
            velocidadeAnimacao, height, inimigoVariacaoY, fita.config.inimigoValorEmPontos);
        const inimigoGrande = new Inimigo(imagemInimigoGrande,
            numColsDeImagemInimigoGrande, numSpritesDeImagemInimigoGrande, inimigoGrandePropAltura,
            velocidadeAnimacao, height, inimigoGrandeVariacaoY, fita.config.inimigoGrandeValorEmPontos);
        const inimigoVoador = new Inimigo(imagemInimigoVoador,
            numColsDeImagemInimigoVoador, numSpritesDeImagemInimigoVoador, inimigoVoadorPropAltura,
            velocidadeAnimacao, 0.0, inimigoVoadorVariacaoY, fita.config.inimigoVoadorValorEmPontos);
        this.inimigos = [inimigo, inimigoGrande, inimigoVoador];
        this._mudaInimigo();

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

        this.cenario.exibeFrente();
        this.cenario.animaFrente();
        
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
        const inimigo = this.inimigos[this.inimigoAtual];
        inimigo.alteraVelocidadeMovimentacao(random(0.01, 0.02));
    }

}
