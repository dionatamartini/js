function parimpar(n /* Parâmetro */) {
    if (n%2== 0) {
        return 'Par'
    } else {
        return 'ímpar'
    }
}

let res = parimpar(4) // Chamada
console.log(res)