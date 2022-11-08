const calcular = document.forms[0]

calcular.addEventListener("submit",(e)=>{
    e.preventDefault()
    let estatura = document.querySelector('#est')
    let peso = document.querySelector('#peso')
    let resultado = document.querySelector('#result')
    
    resultado.value = (peso.value /Math.pow(estatura.value/100,2)).toFixed(2)
    peso.value =""
    estatura.value =""
})
