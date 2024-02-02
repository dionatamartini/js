function gerarTabuada() {
    var num = document.getElementById('numero')
    var r = document.getElementById('resultado')

    if (num.value.length == 0) {
        alert(`[ERRO] Digite um número!`)
    } else {
        var num = Number(num.value)
        r.innerHTML = '';  // Limpa o conteúdo anterior

        for (let i = 0; i <= 10; i++) {
            r.innerHTML += ` ${num} X ${i} = ${num * i} \n`;
        }
    
    }
}
