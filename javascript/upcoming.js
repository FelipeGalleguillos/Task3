const cardCont = document.getElementById('card-container');
const fragment = document.createDocumentFragment();
const checkCont = document.getElementById('chkCont');
const searchBar = document.getElementById('searchSection');
let events;
fetch("https://amazing-events.herokuapp.com/api/events")
    .then(element => element.json())
    .then(array => {
        events = upcoming(array.events);
        checkCategories(events)
        renderCards(textFilter(cardsFiltered(events, filteredCat), searchBar.value.toLowerCase().trim()))
        console.log(events)
    });

let filteredCat = []
////////////////////////////////////////////////////////////////////////////
function checkCategories(events) {
    let aux
    aux = events.map(element => {
        return element.category
    })
    for (let i = 0; i < aux.length; i++) {
        for (let x = 0; x < aux.length; x++) {
            if (aux[i] == aux[x]) {
                aux.splice(x, 1)
            }
        }
    }
    let categories = aux
    categories.forEach(element => {
        checkCont.innerHTML += `<div>
                                <input type="checkbox" id="${element}" name="" value="${element}">
                                <label class="checks" for="${element}">${element}</label>
                                </div>
        `
    });
}

/////////////////////////////////////////////////////////////////////////////////////
function upcoming(events){
    let aux = []
    let actualDate = data.currentDate.split('-');
    events.forEach(element => {
        let cardDate = element.date.split('-');
        if (validateFutureDate(actualDate,cardDate)){
            aux.push(element)
        }   
    });
    return aux;
}
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
function addCategory(category) {
    filteredCat.push(category)
}
////////////////////////////////////////////////////////////////////////////
function deleteCategory(category) {
    filteredCat.forEach(element => {
        if (element == category) {
            filteredCat.splice(filteredCat.indexOf(element), 1)
        }
    })
}
///////////////////////////////////////////////////////////////////////////
function textFilter(array, text) {
    if (text.length == 0) {
        return array
    } else {
        return array.filter(element => element.name.toLowerCase().includes(text) || element.description.toLowerCase().includes(text))
    }
}
//////////////////////////////////////////////////////////////////////////////

function cardsFiltered(events, categories) { //returns array with objects filtered by category
    if (categories.length == 0) {
        return events
    } else {
        let aux1 = []
        let aux2, aux3
        categories.forEach(category => {
            aux3 = events.filter(element => element.category == category)
            aux1 = aux1.concat(aux3)
        })
        aux2 = Array.from(new Set(aux1))
        return aux2
    }
}

////////////////////////////////////////////////////////////////////////
function validateFutureDate(actualDate, cardDate) {
    let actualD, actualM, actualY, cardD, cardM, cardY;

    actualD = parseInt(actualDate[2])
    actualM = parseInt(actualDate[1])
    actualY = parseInt(actualDate[0])
    cardD = parseInt(cardDate[2]);
    cardM = parseInt(cardDate[1]);
    cardY = parseInt(cardDate[0]);

    if (cardY > actualY) {
        return true;
    } else {
        if (cardY == actualY && cardM > actualM) {
            return true;
        } else {
            if (cardY == actualY && cardM == actualM && cardD > actualD) {
                ;
                return true;
            }
        }
        return false;
    }
}
////////////////////////////////////////////////////////////////////////////
function renderCards(events) {

    cardCont.innerHTML = ""
    if (events.length == 0) {
        cardCont.innerHTML = `<h3>No events to show....</h3>`
    } else {
        for (let cardInfo of events) {
            const card = document.createElement('div');
            card.classList.add('card', 'text-bg-danger', 'cardAnim');
            card.style.width = '18rem';
            card.style.height = '25rem';
            card.innerHTML = `<img src="${cardInfo.image}"class="card-img-top h-50" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">${cardInfo.name}</h5>
                        <p class="card-text">${cardInfo.description}</p>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between">
                            <p>$${cardInfo.price}</p>
                            <a id="" href="./details.html?id=${cardInfo._id}" class="btn btn-primary">See more</a>
                        </div>
                    </div>
                    `
            fragment.appendChild(card);
        }
        cardCont.appendChild(fragment);
    }
}

///////////////////////////////////////////////////////////////////////////
checkCont.addEventListener("click", (e) => {
    if (e.target.checked) {
        addCategory(e.target.value)
        renderCards(textFilter(cardsFiltered(events, filteredCat), searchBar.value.toLowerCase().trim()))
    } else {
        deleteCategory(e.target.value)
        renderCards(textFilter(cardsFiltered(events, filteredCat), searchBar.value.toLowerCase().trim()))
    }
})
/////////////////////////////////////////////////////////////////////////////////
searchBar.addEventListener("keyup", () => {
    renderCards(textFilter(cardsFiltered(events, filteredCat), searchBar.value.toLowerCase().trim()))
})
