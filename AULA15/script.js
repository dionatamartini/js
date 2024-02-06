var somalTotal = 0; // Declarar a variável totalCadastrados fora da função adicionar para manter o estado global.
var cadastrados = 0;
var maiorNumero = Number.NEGATIVE_INFINITY;// Inicializa com um valor muito pequeno SITUAÇÕES DE COMPARAÇÃO
var menorNumero = Number.POSITIVE_INFINITY;// Inicializa com um valor muito grande SITUAÇÕES DE COMPARAÇÃO
var media = 0;

function adicionar() {  
    var inputNumero = document.getElementById('numero');
    var num = Number(inputNumero.value);

    if (num <= 0 || num > 100) {
        window.alert('[ERRO] Favor, digite um número válido menor ou igual a 100!');
    } else {
        res.innerHTML += `Valor ${num} adicionado \n`;
        somalTotal += num; // Adiciona o número ao total
        cadastrados ++;
        media = somalTotal / cadastrados

        // Verifica se o número atual é maior que o guardado
        if (num > maiorNumero) { 
            maiorNumero = num
        } 

        // Verifica se o número atual é menor que o guardado
        if (num < menorNumero) {
            menorNumero = num;
        }
    }
}

function finalizar() {
    var somas = document.getElementById('somas');
    somas.innerHTML = `Ao todo, temos ${cadastrados} números cadastrados;<br><br>`
    somas.innerHTML += `O maior valor informado foi ${maiorNumero};<br><br>`
    somas.innerHTML += `O menor valor informado foi ${menorNumero}; <br> <br>`
    somas.innerHTML += `Somando todos os valores, temos ${somalTotal};<br> <br>`;
    somas.innerHTML += `A média dos valores digitados é ${media.toFixed(1).replace('.', ',')}.<br> <br>`;
}