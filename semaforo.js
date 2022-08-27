let botao = document.getElementById('ligar')
const Vermelho = ()=> {
    let vermelho = document.getElementById('vermelho')
    let verde = document.getElementById('verde')
    let amarelo = document.getElementById('amarelo')
    amarelo.style.backgroundColor = ''
    verde.style.backgroundColor = ''
    vermelho.style.backgroundColor = 'red'
    inicio()
}

const Amarelo = ()=> {
    let vermelho = document.getElementById('vermelho')
    let verde = document.getElementById('verde')
    let amarelo = document.getElementById('amarelo')
    verde.style.backgroundColor = ''
    vermelho.style.backgroundColor = ''
    amarelo.style.backgroundColor = 'yellow'
    fim()
}

const Verde = ()=> {
    let vermelho = document.getElementById('vermelho')
    let amarelo = document.getElementById('amarelo')
    let verde = document.getElementById('verde')
    vermelho.style.backgroundColor = ''
    amarelo.style.backgroundColor = ''
    verde.style.backgroundColor = 'green'
    meio()
}

const inicio = ()=> {
    setTimeout(Verde, 7000)
}

const meio = ()=> {
    setTimeout(Amarelo, 6000)
}

const fim = ()=> {
    setTimeout(Vermelho, 5000)
}

botao.addEventListener('click', inicio)
