function gerarCorAleatoriaExcluindo(coresExcluidas) {
    var letras = '0123456789ABCDEF';
    var cor;
    do {
        cor = '#';
        for (var i = 0; i < 6; i++) {
            cor = cor + letras[Math.floor(Math.random() * 16)];
        }
    } while (cor === '#262bbd' || cor === '#FFF');

    return cor;
}

function alterarCorDeFundoDoCabecalho() {;
    var cor = gerarCorAleatoriaExcluindo(coresExcluidas);
    var cabecalho = document.querySelector('header');
    if (cabecalho) {
        cabecalho.style.backgroundColor = cor;
    } else {
        console.error('Elemento de cabeçalho não encontrado');
    }
}

window.onload = alterarCorDeFundoDoCabecalho;
