let events,evento
const container = document.getElementById('container')
const queryString = location.search
const id = new URLSearchParams(queryString).get("id")
console.log(id)
fetch("https://amazing-events.herokuapp.com/api/events")
    .then(element => element.json())
    .then(array =>{ 
        events = array.events;
        // console.log(events)
        evento = events.find(element => element._id == id)
        container.innerHTML=`<div class="card cardD mb-3" style="max-width: 1000px;">
                                <div class="row g-3">
                                    <div class="col-md-5">
                                        <img src="${evento.image}" class="h-100 w-100 img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h5 class="py-2 card-title">${evento.name}</h5>
                                            <p class="card-text">Category: ${evento.category}</p>
                                            <p class="card-text">${evento.description}</p>
                                            <p class="card-text">Place: ${evento.place}</p>
                                            <p class="card-text">Capacity: ${evento.capacity}</p>
                                            <p class="card-text">Assistance:${evento.assistance? evento.assistance : evento.estimate}</p>
                                            <p class="card-text"><strong>Price: $${evento.price}</strong></p>
                                            <p class="card-text"><small class="text-muted">Date: ${evento.date}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `
    });

