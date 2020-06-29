class Gerenciador {

    static _alteraCena(proximaCena) {
        cenaAtual = proximaCena;
        cenas[cenaAtual].setup();
    }

}
