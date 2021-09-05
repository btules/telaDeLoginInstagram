function validaIdade(idade){
    if(idade >= 18){
        return `Você já tem ${idade} anos`
    }else {
        return `Menor de idade ${idade} anos`
    }
}

function clicou(elemento){
    elemento.innerHTML = "Deu certo"
}

function redirecionar(){
    window.open("https://app.rocketseat.com.br/discover/courses")
}