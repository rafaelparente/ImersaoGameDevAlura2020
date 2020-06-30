function preload() {
    imagemTelaInicial = loadImage('./imagens/assets/telaInicial.png');
    imagemCenario = loadImage('./imagens/cenario/floresta.png');
    imagemVida = loadImage('./imagens/assets/coracao.png');
    imagemPersonagem = loadImage('./imagens/personagem/correndo.png');
    imagemInimigo = loadImage('./imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('./imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('./imagens/inimigos/gotinha-voadora.png');
    imagemTelaFinal = loadImage('./imagens/assets/game-over.png');

    somDoJogo = loadSound('./sons/trilha_jogo.mp3');
    somDoPulo = loadSound('./sons/somPulo.mp3');

    const fonte= loadFont('./imagens/assets/fonteTelaInicial.otf');
    fonteTelaInicial = fonte;
    fonteTelaFinal = fonte;
}
