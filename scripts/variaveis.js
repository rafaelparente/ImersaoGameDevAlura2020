const textoDeTelaInicial = "Aperte ESPAÇO para iniciar!";
const propTamanhoTelaInicial = 0.1;
const corDeFundoTelaDeTelaInicial = 'rgba(0, 0, 0, 0.7)';
const corDeTelaInicial = '#fff';

const propTamanhoTelaDeTelaFinal = 0.7;
const corDeFundoTelaDeTelaFinal = 'rgba(0, 0, 0, 0.7)';
const tempoDeFadeDoSomDeFundo = 3;
const textoDeTelaFinal = "Obrigado por jogar!";
const propTamanhoTelaFinalTexto = 0.05;
const corDeTelaFinalTexto = '#fff';
const propPosicaoTextoDeTelaFinal = 0.85;

const propTamanhoPontuacaoCenario = 0.1;
const propPosicaoPontuacaoDeTelaFinal = 0.15;
const corDaPontuacao = '#fff';
const textoDePontuacaoTelaFinal = 'Pontuação final\n';

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
const inimigoVoadorPropAltura = 0.2;
const inimigoVoadorPropMovimentacao = 0.005;
const inimigoVoadorVariacaoY = 0.25;
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
let imagemTelaFinal;

let somDoJogo;
let somDoPulo;

let cenario;
let personagem;
let pontuacao;

let telaInicial;
let jogo;
let telaFinal;
let cenaAtual = 'jogo';
let cenas;
