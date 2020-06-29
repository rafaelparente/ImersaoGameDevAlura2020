function preload() {
    imagemTelaInicial = loadImage('./imagens/assets/telaInicial.png');
    imagemTelaFinal = loadImage('./imagens/assets/game-over.png');
    imagemCenario = loadImage('./imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('./imagens/personagem/correndo.png');
    imagemInimigo = loadImage('./imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('./imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('./imagens/inimigos/gotinha-voadora.png');

    somDoJogo = loadSound('./sons/trilha_jogo.mp3');
    somDoPulo = loadSound('./sons/somPulo.mp3');

    const fonte= loadFont('./imagens/assets/fonteTelaInicial.otf');
    fonteTelaInicial = fonte;
    fonteTelaFinal = fonte;
}
