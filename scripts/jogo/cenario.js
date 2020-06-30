class Cenario {
  
    constructor(imagem, velocidadeAnimacao) {
        this.imagem = imagem;
        this.velocidadeAnimacao = velocidadeAnimacao;
        this.largura = Math.floor(width / velocidadeAnimacao) * velocidadeAnimacao;
        this.x1 = [0, 0, 0, 0, 0];
        this.x2 = [this.largura, this.largura, this.largura, this.largura, this.largura];
    }

    _exibeImagem(i) {
        image(this.imagem[i], this.x1[i], 0, this.largura, height);
        image(this.imagem[i], this.x2[i], 0, this.largura, height);
    }

    exibe() {
        for (let i = 0; i < this.imagem.length - 1; ++i) {
            this._exibeImagem(i);
        }
    }

    exibeFrente() {
        this._exibeImagem(this.imagem.length - 1);
    }

    _animaImagem(i, velocidadeAnimacao) {
        this.x1[i] -= velocidadeAnimacao;
        this.x2[i] -= velocidadeAnimacao;

        if (this.x1[i] <= -this.largura) {
            this.x1[i] = this.largura;
        }
        else if (this.x2[i] <= -this.largura) {
            this.x2[i] = this.largura;
        }
    }

    anima() {
        let velocidadeAnimacao = this.velocidadeAnimacao;

        for (let i = this.imagem.length - 2; i >= 0; --i) {
            this._animaImagem(i, velocidadeAnimacao);
            velocidadeAnimacao /= 10.0;
        }
    }

    animaFrente() {
        let velocidadeAnimacao = this.velocidadeAnimacao;
        let i = this.imagem.length - 1;

        this._animaImagem(i, velocidadeAnimacao);
    }

}
