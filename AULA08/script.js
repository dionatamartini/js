function verificar() {

var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('ano')
var res = document.getElementById('res')
if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('sex')
    var idade = ano - Number(fano.value)
    var genero = ''
    if (fsex[0].checked) {
        genero = 'Homem'
    } else if (fsex [1].checked) {
        genero = 'Mulher'
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Dectamos ${genero} com ${idade} anos`
}
}