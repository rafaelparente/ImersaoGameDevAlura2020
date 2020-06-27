const textoDeGameStart = "Aperte ESPAÇO para iniciar!";
const propTamanhoGameStart = 0.1;
const corDeFundoTelaDeGameStart = 'rgba(0, 0, 0, 0.7)';
const corDeGameStart = '#fff';

const propTamanhoTelaDeGameOver = 0.7;
const corDeFundoTelaDeGameOver = 'rgba(0, 0, 0, 0.7)';
const tempoDeFadeDoSomDeFundo = 3;
const textoDeGameOver = "Obrigado por jogar!";
const propTamanhoGameOverTexto = 0.05;
const corDeGameOverTexto = '#fff';
const propPosicaoTextoDeGameOver = 0.85;

const propTamanhoPontuacaoCenario = 0.1;
const propPosicaoPontuacaoDeGameOver = 0.15;
const corDaPontuacao = '#fff';

const numColsDeImagemPersonagem = 4;
const numSpritesDeImagemPersonagem = 16;
const personagemPropAltura = 0.25;
const personagemPropPulo = 0.025;
const personagemLimiteDePulo = 2;
const personagemVariacaoY = -0.01;

const numColsDeImagemInimigo = 4;
const numSpritesDeImagemInimigo = 28;
const inimigoPropAltura = 0.1;
const inimigoPropMovimentacao = 0.01;
const inimigoVariacaoY = -0.01;
const inimigoValorEmPontos = 3;

const numColsDeImagemInimigoGrande = 5;
const numSpritesDeImagemInimigoGrande = 28;
const inimigoGrandePropAltura = 0.42;
const inimigoGrandePropMovimentacao = 0.005;
const inimigoGrandeVariacaoY = 0.05;
const inimigoGrandeValorEmPontos = 10;

const numColsDeImagemInimigoVoador = 3;
const numSpritesDeImagemInimigoVoador = 16;
const inimigoVoadorPropAltura = 0.1;
const inimigoVoadorPropMovimentacao = 0.0075;
const inimigoVoadorVariacaoY = 0.15;
const inimigoVoadorValorEmPontos = 1;

const velocidadeAnimacao = 3;
const precisaoDaColisao = 0.7;
const propGravidade = 0.001;

const inimigos = [];

let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;

let somDoJogo;
let somDoPulo;

let gameStart;
let gameOver;
let cenario;
let personagem;
let pontuacao;

let estaDesenhando = false;

function preload() {
    imagemGameOver = loadImage('./imagens/assets/game-over.png');
    imagemCenario = loadImage('./imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('./imagens/personagem/correndo.png');
    imagemInimigo = loadImage('./imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('./imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('./imagens/inimigos/gotinha-voadora.png');

    somDoJogo = loadSound('./sons/trilha_jogo.mp3');
    somDoPulo = loadSound('./sons/somPulo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    gameStart = new GameStart(textoDeGameStart, propTamanhoGameStart, corDeFundoTelaDeGameStart, corDeGameStart);
    gameOver = new GameOver(imagemGameOver, propTamanhoTelaDeGameOver, corDeFundoTelaDeGameOver, textoDeGameOver, propTamanhoGameOverTexto, corDeGameOverTexto, propPosicaoTextoDeGameOver);
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

    noLoop();
}

function keyPressed() {
    if (key == ' ') {
        if (!somDoJogo.isLooping()) {
            estaDesenhando = true;
            somDoJogo.loop();
            loop();
        }
        
        if (estaDesenhando && personagem.pula()) {
            somDoPulo.play();
        }
    }
}

function draw() {
    cenario.exibe();
    cenario.anima();

    personagem.exibe();
    personagem.aplicaGravidade();

    inimigos.forEach(inimigo => {
        inimigo.exibe();
        const pontos = inimigo.move();
        pontuacao.adicionarPonto(pontos);

        if (personagem.estaColidindo(inimigo)) {
            estaDesenhando = false;
        }
    });

    if (estaDesenhando) {
        pontuacao.exibe();
    }
    else if (somDoJogo.isLooping()) {
        gameOver.exibe();
        pontuacao.exibe(CENTER, width / 2.0, height * propPosicaoPontuacaoDeGameOver, 'Pontuação final\n');
        somDoJogo.setVolume(0, tempoDeFadeDoSomDeFundo);
        noLoop();
    }
    else {
        gameStart.exibe();
    }
}
