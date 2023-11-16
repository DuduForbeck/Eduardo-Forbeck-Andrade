// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    var letras = '0123456789ABCDEF';
    var cor = '#';
    for (var i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Função para alterar a cor de fundo do cabeçalho
function alterarCorDeFundoDoCabecalho() {
    var cor = gerarCorAleatoria();
    var cabecalho = document.querySelector('header');
    if (cabecalho) {
        cabecalho.style.backgroundColor = cor;
    } else {
        console.error('Elemento de cabeçalho não encontrado');
    }
}

// Chamar a função quando a página é carregada
window.onload = alterarCorDeFundoDoCabecalho;
