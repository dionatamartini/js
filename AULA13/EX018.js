let num = [5,8,2,9,3]
num[5]=6 // Significa que na posição cinco foi incluído o número 6
num.push(11) // Dessa forma pede para que seja incluido o número 10 naúltima posição.
num.sort() // Para que os elementos fiquem em ordem crescente.

/*
console.log(`Nosso vetor é o ${num}`)
console.log(num.length) // Pede para que mostre quantos valores tem dentro da varíavel composta.




for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}



/*
let pos = num.indexOf(13)
if(pos == -1) {
    console.log(`Esse elemento não foi encontrado`)
} else {
    console.log(`O valor 5 está na posição ${pos}`)
}

        Serve para encontrar a posição de um elemento */
        