const numColsDeImagemPersonagem = 4;
const numLinsDeImagemPersonagem = 4;
const personagemPropAltura = 0.25;
const numColsDeImagemInimigo = 4;
const numLinsDeImagemInimigo = 7;
const inimigoPropAltura = 0.1;
const velocidadeMovimentacaoDoInimigo = 10;
const velocidadeAnimacao = 3;

let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let somDoJogo;
let somDoPulo;
let cenario;
let personagem;

function preload() {
  imagemCenario = loadImage('./imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('./imagens/personagem/correndo.png');
  imagemInimigo = loadImage('./imagens/inimigos/gotinha.png');
  somDoJogo = loadSound('./sons/trilha_jogo.mp3');
  somDoPulo = loadSound('./sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, velocidadeAnimacao);
  personagem = new Personagem(imagemPersonagem, numColsDeImagemPersonagem, numLinsDeImagemPersonagem, personagemPropAltura, velocidadeAnimacao);
  inimigo = new Inimigo(imagemInimigo, numColsDeImagemInimigo, numLinsDeImagemInimigo, inimigoPropAltura, velocidadeAnimacao, velocidadeMovimentacaoDoInimigo);
  somDoJogo.loop();
}

function keyPressed() {
  if (key == ' ') {
    personagem.pula();
    somDoPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  if (personagem.estaColidindo(inimigo)) {
    noLoop();
  }
}
