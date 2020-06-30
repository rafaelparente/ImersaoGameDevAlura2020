function preload() {
    fita = loadJSON('./fita/fita.json');

    const imagemCenario0 = loadImage('./imagens/cenario/fase1/Sky.png');
    const imagemCenario1 = loadImage('./imagens/cenario/fase1/BG_Decor.png');
    const imagemCenario2 = loadImage('./imagens/cenario/fase1/Middle_Decor.png');
    const imagemCenario3 = loadImage('./imagens/cenario/fase1/Foreground.png');
    const imagemCenario4 = loadImage('./imagens/cenario/fase1/Ground.png');
    imagemCenario = [imagemCenario0, imagemCenario1, imagemCenario2, imagemCenario3, imagemCenario4];

    imagemTelaInicial = loadImage('./imagens/assets/telaInicial.png');
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
