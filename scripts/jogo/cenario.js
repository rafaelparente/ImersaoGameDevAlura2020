class Cenario {
  
    constructor(imagem, velocidadeAnimacao) {
        this.imagem = imagem;
        this.velocidadeAnimacao = velocidadeAnimacao;
        this.x1 = 0;
        this.x2 = width;
    }

    exibe() {
        image(this.imagem, this.x1, 0, width, height);
        image(this.imagem, this.x2, 0, width, height);
    }

    anima() {
        this.x1 -= this.velocidadeAnimacao;
        this.x2 -= this.velocidadeAnimacao;

        if (this.x1 <= -width) {
            this.x1 = width;
        }
        else if (this.x2 <= -width) {
            this.x2 = width;
        }
    }

}
