const peso = document.getElementById('pesoA')
const dolar = document.getElementById('dolar')


dolar.addEventListener("keyup",()=>{
    peso.value = dolar.value * 159.71
    if(dolar.value == ""){
        dolar.value = 1
        peso.value = 159.71
    }
})
    
peso.addEventListener("keyup",()=>{
    dolar.value = peso.value / 159.71
    if(peso.value == ""){
        dolar.value = 1
        peso.value = 159.71
    }
})
