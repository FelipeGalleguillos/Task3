
const $cardCont = document.getElementsByClassName('cards');
const fragment = document.createDocumentFragment();


for (let cardInfo of events) {

    const card = document.createElement('div');
    card.innerHTML= `<img src=${cardInfo.image} class="card-img-top" alt="..."></img>
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
    fragment.appendChild(div); 
}

card.appendChild(fragment);



/* <div class="card h-100 text-bg-danger" style="width: 15rem;">
    <img src="./assets/Feria_de_comidas7.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
            <h5 class="card-title">Festival of the colectivities</h5>
            <p class="card-text">Enjoy your favorite dishes from different countries in a unique event for the whole family.</p>
        </div>
        <div class="card-footer">
            <div class="d-flex justify-content-between">
                <p>$5</p>
                <a href="#" class="btn btn-primary">See more</a>
            </div>
        </div>
</div> */