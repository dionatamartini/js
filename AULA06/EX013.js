var agora = new Date()
var diaSem = agora.toLocaleDateString('pt-BR', { weekday: 'long' });

console.log(`Hoje é: ${diaSem}`)

/*switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
            console.log('Segunda')
            break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
            console.log('Sexta')
            break
    case 6:
        console.log('Sábado')
        break
} */
