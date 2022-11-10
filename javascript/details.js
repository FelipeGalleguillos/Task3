const events = data.events
const container = document.getElementById('container')
const queryString = location.search
const id = new URLSearchParams(queryString).get("id")

const event = events.find(element => element._id == id)

container.innerHTML=`<div class="card cardD mb-3" style="max-width: 1000px;">
                        <div class="row g-3">
                            <div class="col-md-5">
                                <img src="${event.image}" class="h-100 w-100 img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h5 class="py-2 card-title">${event.name}</h5>
                                    <p class="card-text">Category: ${event.category}</p>
                                    <p class="card-text">${event.description}</p>
                                    <p class="card-text">Place: ${event.place}</p>
                                    <p class="card-text">Capacity: ${event.capacity}</p>
                                    <p class="card-text">Assistance: ${event.assistance}</p>
                                    <p class="card-text"><strong>Price: $${event.price}</strong></p>
                                    <p class="card-text"><small class="text-muted">Date: ${event.date}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
`
// "_id": 1,
//       "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
//       "name":"Collectivities Party",
//       "date":"2021-12-12",
//       "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
//       "category":"Food Fair",
//       "place":"Room A",
//       "capacity":45000,
//       "assistance":42756,
//       "price":5