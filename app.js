let listaDeNumerosSorteados = []; //Array dos números que ja foram sorteados
let numeroLimite = 10; //Limite de numero que podem ser escolhidos no jogo variando de 1 a 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','!Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (chute >= numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        else {
            exibirTextoNaTela('p', 'O número secreto e maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementoNaLista = listaDeNumerosSorteados.length; //Tamanho do lista(Array)

    //Fazer uma verificação se já foi escolhbido todos os números
    if (quantidadeElementoNaLista == numeroLimite){
        listaDeNumerosSorteados = []; //Rezeta a lista dos números aleatorios escolhidos deixando o Array vazio
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido); //Push : Adiciona o número escolhido a lista(Array), ficando ao final da lista, sendo o primeiro valor no indice 0.
        //console.log(listaDeNumerosSorteados); // Este console e apenas para demonstrar que ele está armazendo no array o numeroSecreto, caso utilize o ultimo indice demonstra a resposta do jogo.
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}