class Vida {

    constructor(imagem, maximo, inicial, propTamanho, propMargem) {
        this.imagem = imagem;
        this.maximo = maximo;
        this.inicial = inicial;
        this.vidas = this.inicial;

        const prop = min(propTamanho * width / imagem.width, propTamanho * height / imagem.height);
        this.largura = imagem.width * prop;
        this.altura = imagem.height * prop;
        this.margem = min(width, height) * propMargem;
    }

    exibe() {
        for (let i = 0; i < this.vidas; ++i) {
            const x = this.largura * i + this.margem * (i + 1);

            image(this.imagem, x, this.margem,
                this.largura, this.altura);
        }
    }

    ganhaVida() {
        if (this.vidas < this.maximo) {
            this.vidas++;
        }
    }

    perdeVida() {
        this.vidas--;
    }

}
