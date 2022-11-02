const cardCont = document.getElementById('card-container');
const fragment = document.createDocumentFragment();
let fechaCard;
const tiempoActual = Date.now();
const fechaActual = new Date(tiempoActual);

////////////////////////////////////////////////////////////////////////
const validarFechaFutura = function(fechaActual, fechaCard) {
    let diaActual, mesActual, añoActual, diaCard, mesCard, añoCard;
    
    diaActual = fechaActual.getDate();
    mesActual = fechaActual.getMonth() + 1;
    añoActual = fechaActual.getFullYear();
    diaCard = parseInt(fechaCard[2]);
    mesCard = parseInt(fechaCard[1]);
    añoCard = parseInt(fechaCard[0]);

    if (añoCard > añoActual) {
        console.log("hola");
        return true;
    }else{
        if (añoCard == añoActual && mesCard > mesActual ) {
            console.log("hola2");
            return true;
        }else{
            if (añoCard == añoActual && mesCard == mesActual && diaCard > diaActual) {
                console.log("hola3");
                return true;
            }
        }
        console.log("hola4");
        return false;   
    }
}
////////////////////////////////////////////////////////////////////////////
for (let cardInfo of events) {


    fechaCard = cardInfo.date.split('-');

    if (validarFechaFutura(fechaActual, fechaCard)) {
        const card = document.createElement('div');
        card.classList.add('card','text-bg-danger');
        card.style.width = '18rem';
        card.style.height = '25rem';
        card.innerHTML= `<img src="${cardInfo.image}"class="card-img-top h-50" alt="..."></img>
        <div class="card-body">
            <h5 class="card-title">${cardInfo.name}</h5>
            <p class="card-text">${cardInfo.description}</p>
        </div>
        <div class="card-footer">
            <div class="d-flex justify-content-between">
                <p>$${cardInfo.price}</p>
                <a href="#" class="btn btn-primary">See more</a>
            </div>
        </div>
        `
        
        fragment.appendChild(card);       
    }
}

cardCont.appendChild(fragment);
///////////////////////////////////////////////////////////////////////////
