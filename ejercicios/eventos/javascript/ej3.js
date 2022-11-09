let cards = datos
let idGlobal = 4
let formulario = document.forms[0]
let btnBorrar = document.querySelector('#borrar')
let contenedor = document.getElementById('cardContainer') 
let barraBuscar = document.getElementById('buscar')
let checkBox = document.getElementById('flexSwitchCheckDefault')

pintarNotas(cards)

///////////////////////////////////////////////
function pintarNotas(array){
    if (array == "") {
        contenedor.innerHTML=`<h1>No hay cartas para mostrar</h1>`
    }else{
        let tachar
        let contenedor = document.getElementById('cardContainer')
        contenedor.innerHTML=''
        array.forEach(element => {
            if(element.realizada){
                tachar = "tachado"
            }else{
                tachar = ""
            }
            contenedor.innerHTML+=`<div class="d-flex justify-content-center align-items-center note">
                                        <div class="d-flex flex-column justify-content-end noteContent">
                                            <h6 class="text-center">
                                                ${element.titulo}
                                                <input onClick="marcarRealizada(${element.id})" type="checkbox" ${element.realizada? "checked": ""}>
                                            </h6>
                                            <p class="${tachar} w-100 h-50" >${element.texto}</p>
                                            <input id="${element.id}" class="delete text-bg-danger rounded w-50 my-3" type="button" value="Borrar nota">
                                        </div>     
                                    </div>
            `
        })
    } 
}
/////////////////////////////////////////////////
function realizadas(array){
    let aux
    aux = array.filter(element => element.realizada)
    return aux
}
////////////////////////////////////////////////
function filtrarTexto(array,texto){
    if (texto == "") {
        return array
    } else {
        return array.filter(element=>element.titulo.toLowerCase().includes(texto) || element.texto.toLowerCase().includes(texto))
    }
}
/////////////////////////////////////////////////
function marcarRealizada(id){
    cards.forEach(element=>{
        if (element.id == id) {
            cards[indexOf(element)].realizada = !element.realizada
        }
    })
    pintarNotas(cards)
}

////////////////////////////////////////////////
function agregarNota(titulo,texto){
    idGlobal++
    let aux = {
        id: idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    }
    cards.push(aux) 
}
//////////////////////////////////////////////////
function borrarNota(id){
    cards.forEach(element =>{
        if (element.id == id) {
            cards.splice(cards.indexOf(element),1)
        }
    }
    )
    pintarNotas(cards)
}
/////////////////////////////////////////////////////
btnBorrar.addEventListener("click",()=>{
    formulario.reset()
})

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    let titulo = document.querySelector('#titulo')
    let texto = document.querySelector('#texto')
    agregarNota(titulo.value, texto.value)
    pintarNotas(cards)
    formulario.reset()
})

cardContainer.addEventListener("click",(e)=>{
    let id = e.target.id
    borrarNota(id)
})

barraBuscar.addEventListener("keyup",((e)=>{
    let aux
    if (checkBox.checked) {
        aux=realizadas(cards)
        pintarNotas(filtrarTexto(aux,barraBuscar.value.toLowerCase()))    
    } else {
        pintarNotas(filtrarTexto(cards,barraBuscar.value.toLowerCase()))    
    }
}))

checkBox.addEventListener("click",((e)=>{
    let aux
    if(e.target.checked && barraBuscar.value != ""){
        aux=filtrarTexto(cards,barraBuscar.value.toLowerCase())
        pintarNotas(realizadas(aux))
    } else {
        if (e.target.checked) {
            pintarNotas(realizadas(cards))
        } else {
            pintarNotas(cards)
        }
    }
}))


