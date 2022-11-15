let events
fetch("https://amazing-events.herokuapp.com/api/events")
    .then(element => element.json())
    .then(array => {
        events = array.events;
        date = array.currentDate.split('-')
        console.log(array)
        renderTable(events, date)
    });
//////////////////////////////////////////////////////////////////////////////////
function renderTable(events, date) {
    let categories = Array.from(new Set(events.map(element => element.category)))
    let tableEvents = events.map(element => {
        let aux, num
        if (element.assistance) {
            num = element.assistance
        } else {
            num = element.estimate
        }
        aux = {
            name: element.name,
            attendance: (num * 100 / element.capacity).toFixed(1),
            capacity: element.capacity
        }
        return aux
    })
    renderFirstTable(tableEvents)
    renderSecondandThirdTable(events, date, categories)


}
/////////////////////////////////////////////////////////////////////
function renderFirstTable(array) {
    let highPercentage = highAttendance(array)
    let lowPercentage = lowerAttendance(array)
    let higherCapacity = highCapacity(array)
    const table1 = document.getElementById('table1')

    for (let x = 0; x < 1 /*array.length/2*/; x++) {
        let tr = document.createElement('tr')
        tr.innerHTML += `<td>${highPercentage[x].name} - ${highPercentage[x].attendance}%</td>
        <td>${lowPercentage[x].name} - ${lowPercentage[x].attendance}%</td>
        <td>${higherCapacity[x].name} - ${higherCapacity[x].capacity}</td>
        `
        table1.appendChild(tr)
    }
}
////////////////////////////////////////////////////////////
function renderSecondandThirdTable(array, date, categories) {
    let pastEvents = pastEvent(array, date)
    let upcomingEvents = upcomingEvent(array, date)
    const table2 = document.getElementById('table2')
    const table3 = document.getElementById('table3')

    renderPastCat(table3, pastEvents, categories)
    renderUpcmgCat(table2, upcomingEvents, categories)
}
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
function highAttendance(array) {
    let aux = []
    aux = Array.from(array)
    aux.sort((a, b) => b.attendance - a.attendance)
    return aux
}
//////////////////////////////////////////////////////////////
function lowerAttendance(array) {
    let aux = []
    aux = Array.from(array)
    aux.sort((a, b) => a.attendance - b.attendance)
    return aux
}
/////////////////////////////////////////////////////////////
function highCapacity(array) {
    let aux = []
    aux = Array.from(array)
    aux.sort((a, b) => b.capacity - a.capacity)
    return aux
}
////////////////////////////////////////////////////////////
function pastEvent(array, date) {
    let aux
    aux = array.filter(element => {
        let eventDate = element.date.split('-')
        if ((eventDate[0] < date[0]) || (eventDate[0] == date[0] && eventDate[1] < date[1]) ||
            (eventDate[0] == date[0] && eventDate[1] == date[1] && eventDate[2] < date[2])) {
            return true
        } else {
            return false
        }
    })
    return aux
}
///////////////////////////////////////////////////////////////////
function upcomingEvent(array, date) {
    let aux
    aux = array.filter(element => {
        let eventDate = element.date.split('-')
        if ((eventDate[0] > date[0]) || (eventDate[0] == date[0] && eventDate[1] > date[1]) ||
            (eventDate[0] == date[0] && eventDate[1] == date[1] && eventDate[2] > date[2])) {
            return true
        } else {
            return false
        }
    })
    return aux
}
///////////////////////////////////////////////////////////////
function renderPastCat(table3, pastEvents, categories) {

    categories.forEach(category => {
        let revenues = 0
        let totalAttendance = 0
        let totalCapacity = 0
        revenues = pastEvents.filter(element => element.category == category)
        if (revenues.lenth != 0) {
            revenues = revenues.map(element => element.price * element.assistance)
                .reduce((total, element) => total + element)
            totalAttendance = pastEvents.filter(element => element.category == category)
                .map(element => element.assistance)
                .reduce((total, element) => total + element)
            totalCapacity = pastEvents.filter(element => element.category == category)
                .map(element => element.capacity)
                .reduce((total, element) => total + element)
            table3.innerHTML += `<tr>
                                <td>${category}</td>
                                <td>$ ${revenues}</td>
                                <td>${(totalAttendance * 100 / totalCapacity).toFixed(1)}%</td>
                                </tr>
                     `
        }
    });

}
// //////////////////////////////////////////////////////////////
function renderUpcmgCat(table2, upcomingEvents, categories) {

    categories.forEach(category => {
        let revenues = 0
        let totalAttendance = 0
        let totalCapacity = 0

        revenues = upcomingEvents.filter(element => element.category == category)
        if (revenues.length != 0) {
            revenues = revenues.map(element => element.price * element.estimate)
                .reduce((total, element) => total + element)
            totalAttendance = upcomingEvents.filter(element => element.category == category)
                .map(element => element.estimate)
                .reduce((total, element) => total + element)
            totalCapacity = upcomingEvents.filter(element => element.category == category)
                .map(element => element.capacity)
                .reduce((total, element) => total + element)
            table2.innerHTML += `<tr>
                                <td>${category}</td>
                                <td>$ ${revenues}</td>
                                <td>${(totalAttendance * 100 / totalCapacity).toFixed(1)}%</td>
                                </tr>
            `
        }
    });

}
