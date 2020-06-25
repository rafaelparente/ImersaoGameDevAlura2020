const numColsDeImagemPersonagem = 4;
const numLinsDeImagemPersonagem = 4;
const personagemPropAltura = 0.28;
const velocidade = 3;

let imagemCenario;
let imagemPersonagem;
let somDoJogo;
let cenario;
let personagem;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, velocidade);
  personagem = new Personagem(imagemPersonagem, numColsDeImagemPersonagem, numLinsDeImagemPersonagem, personagemPropAltura, velocidade);
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
}
