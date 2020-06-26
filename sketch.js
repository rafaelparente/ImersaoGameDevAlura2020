const propTamanhoTelaDeGameOver = 0.7;
const corDeFundoTelaDeGameOver = 'rgba(0, 0, 0, 0.7)';

const numColsDeImagemPersonagem = 4;
const numLinsDeImagemPersonagem = 4;
const personagemPropAltura = 0.25;
const personagemPropPulo = 0.05;
const personagemLimiteDePulo = 2;

const numColsDeImagemInimigo = 4;
const numLinsDeImagemInimigo = 7;
const inimigoPropAltura = 0.1;
const inimigoPropMovimentacao = 0.01;

const velocidadeAnimacao = 3;
const precisaoDaColisao = 0.7;
const propGravidade = 0.1;

let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemGameOver;

let somDoJogo;
let somDoPulo;

let gameOver;
let cenario;
let personagem;
let inimigo;

let isLooping = true;

function preload() {
    imagemGameOver = loadImage('./imagens/assets/game-over.png');
    imagemCenario = loadImage('./imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('./imagens/personagem/correndo.png');
    imagemInimigo = loadImage('./imagens/inimigos/gotinha.png');

    somDoJogo = loadSound('./sons/trilha_jogo.mp3');
    somDoPulo = loadSound('./sons/somPulo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    gameOver = new GameOver(imagemGameOver, propTamanhoTelaDeGameOver, corDeFundoTelaDeGameOver);
    cenario = new Cenario(imagemCenario, velocidadeAnimacao);
    personagem = new Personagem(imagemPersonagem,
        numColsDeImagemPersonagem, numLinsDeImagemPersonagem, personagemPropAltura,
        velocidadeAnimacao, personagemPropPulo, propGravidade, precisaoDaColisao, personagemLimiteDePulo);
    inimigo = new Inimigo(imagemInimigo,
        numColsDeImagemInimigo, numLinsDeImagemInimigo, inimigoPropAltura,
        velocidadeAnimacao, inimigoPropMovimentacao);
    
    somDoJogo.loop();
}

function keyPressed() {
    if (key == ' ' && isLooping) {
        if (personagem.pula()) {
            somDoPulo.play();
        }
    }
}

function draw() {
    cenario.exibe();
    cenario.anima();

    personagem.exibe();
    personagem.aplicaGravidade();

    inimigo.exibe();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
        isLooping = false;
        gameOver.exibe();
        somDoJogo.setVolume(0, 3);
        noLoop();
    }
}
