//1)Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
let altura = prompt('Digite sua altura:');
let peso = prompt('Digite sua peso:');

function massaCorporal(altura,peso) {
    imc = peso/(altura * altura);
    return imc.toFixed(2);
}

console.log(`IMC = ${massaCorporal(altura,peso)}`);

//2)Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

let numero = prompt('Digite um numero');

function fatorialNumero(numero) {
    if (numero < 0){
        return 'Não existe fatorial';
    }
    else{
        if(numero == 0){
            return fatorial = 1;
        }
        else{
            let fatorial = 1;
            for (let i=1;i <= numero; i++){
                fatorial *= i;
            }
            return fatorial;
        }
    }
}

console.log(`${numero}! = ${fatorialNumero(numero)}`);

//3) Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

let valorDolar = prompt('Digite um valor:');

function conversorReal(valorDolar) {
    valorReal = valorDolar * 4.80;
    return valorReal;
}

console.log(conversorReal(valorDolar));

//4) Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

let larguraSala = prompt('Digite a largura da sala:');

let comprimentoSala = prompt('Digite o comprimento da sala:');

function areaSala(larguraSala,comprimentoSala){
    area = larguraSala * comprimentoSala;
    return area;
}

console.log(`Sendo sua área de ${areaSala(larguraSala,comprimentoSala)}`);

//5) Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

let raioCirculo = prompt('Digite o raio do circulo:');

let PI = 3.14;

function areaCirculo(raioCirculo){

    area =(raioCirculo * raioCirculo) * PI;

    return area;

}

function perimetroCirculo(raioCirculo){

    perimetro = 2 * PI * raioCirculo;

    return perimetro;

}

alert(`Sendo sua área de ${areaCirculo(raioCirculo)} m² e seu perimetro  e de ${perimetroCirculo(raioCirculo)} m`);

//6) Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

let numeroMultiplicador = prompt('Digite um número:');

function multiplicacao(numeroMultiplicador) {
    let multiplicado = 1;

    while (multiplicado <= 10) {
        let resultado = numeroMultiplicador * multiplicado;

        console.log(`${numeroMultiplicador} * ${multiplicado} = ${resultado}`);

        multiplicado++;
    }
}

multiplicacao(numeroMultiplicador);