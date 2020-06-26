class AnimacaoTerrestre extends Animacao {

    constructor(imagem, numCols, numLins, propAltura, velocidadeAnimacao) {
        super(imagem, numCols, numLins, propAltura, velocidadeAnimacao);

        this.y = height - this.altura;
        this.contadorDePulos = 0;
    }

}
