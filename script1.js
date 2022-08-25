function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        window.alert('Tudo certo!')
    }
   

    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    var gen = ''
    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade <=16){
            //criança / adolescente
            img.setAttribute('src' , 'exercicio/meninopequeno.png')
        } else if (idade >= 17 && idade <= 60){
            // adulto 
            img.setAttribute('src' , 'exercicio/homem.png')
        } else if(idade > 61 && idade <= 150) {
            // idoso
            img.setAttribute('src' , 'exercicio/sem título.png')
        }
        
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade <=16){
            //criança / adolescente
            img.setAttribute('src', 'exercicio/menininha.png')
        } else if (idade >= 17 && idade <= 60){
            // adulto 
            img.setAttribute('src', 'exercicio/mulhernova.png')
        } else if (idade > 61 && idade <= 150){
            // idoso
            img.setAttribute('src' , 'exercicio/idosa.png')
        }
    }
    res.style.textAlign = 'center'
    img.style.padding = '20px'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos `
    res.appendChild(img)
}