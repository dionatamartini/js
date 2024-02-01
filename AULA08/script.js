function verificar() {

var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('ano')
var res = document.getElementById('res')
var resimg = document.getElementById('resimg')

if (fano.value.length == 0 || fano.value >= ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    resimg.innerHTML = '';
    var fsex = document.getElementsByName('sex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade > 0 && idade < 16) {
            img.setAttribute('src' , 'imagens/crianca-mas.png')
            res.innerHTML = `Detectamos uma criaça do sexo masculino com ${idade} anos`
        } else if (idade < 50) {
            img.setAttribute('src' , 'imagens/homem.png')
            res.innerHTML = `Detectamos um homem adulto com ${idade} anos`
        } else {
            img.setAttribute('src' , 'imagens/idoso-mas.png')
            res.innerHTML = `Detectamos um homem idoso com ${idade} anos`
        }
    } else if (fsex [1].checked) {
        genero = 'Mulher'
        if (idade >0 && idade <16) {
            img.setAttribute('src' , 'imagens/crianca-fem.png')
            res.innerHTML = `Detectamos uma criaça do sexo feminino com ${idade} anos`
        } else if (idade < 50) {
            img.setAttribute('src' , 'imagens/mulher.png')
            res.innerHTML = `Detectamos uma mulher adulta com ${idade} anos`
        } else {
            img.setAttribute('src' , 'imagens/idoso-fem.png')
            res.innerHTML = `Detectamos uma mulher idosa com ${idade} anos`
        }
    }


    img.style.margin = 'auto'
    img.style.display = 'block'
    
    
    
    resimg.appendChild(img)
    }
}