const cardCont = document.getElementById('card-container');
const fragment = document.createDocumentFragment();
let fechaCard;
const eventos = data.events;
const fechaActual = data.currentDate.split('-');

////////////////////////////////////////////////////////////////////////
const validarFechaPasada = function(fechaActual, fechaCard) {
    let diaActual, mesActual, añoActual, diaCard, mesCard, añoCard;
    
    diaActual = parseInt(fechaActual[2])
    mesActual = parseInt(fechaActual[1])
    añoActual = parseInt(fechaActual[0]) 
    diaCard = parseInt(fechaCard[2]);
    mesCard = parseInt(fechaCard[1]);
    añoCard = parseInt(fechaCard[0]);

    if (añoCard < añoActual) {
        return true;
    }else{
        if (añoCard == añoActual && mesCard < mesActual ) {
            return true;
        }else{
            if (añoCard == añoActual && mesCard == mesActual && diaCard < diaActual) {
                return true;
            }
        }
        return false;   
    }
}
////////////////////////////////////////////////////////////////////////////
for (let cardInfo of eventos) {


    fechaCard = cardInfo.date.split('-');

    if (validarFechaPasada(fechaActual, fechaCard)) {
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
