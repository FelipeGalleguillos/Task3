const { createApp } = Vue

const app = createApp({
    data() {
        return {
            events: [],
            table1: [],
            table2: [],
            table3: []
        }

    },
    created() {
        fetch("https://amazing-events.herokuapp.com/api/events")
            .then(res => res.json())
            .then(array => {
                this.events = array.events
                this.infoTable1()
            })
            .catch(err => console.log(err))
    },
    methods: {
        infoTable1() {
            let table1 = this.events.filter(events=>events.assistance).map(event=>{
                let aux 
                return aux = {
                    name:event.name,
                    attendance: event.assistance*100/event.capacity,
                    capacity:event.capacity
                }
            })
            let higher = table1.sort((a,b)=>b.attendance-a.attendance)[0]
            let lower = table1[table1.length-1]
            let highCapacity = table1.sort((a,b)=>b.capacity-a.capacity)[0]
            let object={
                col1:higher,
                col2:lower,
                col3:highCapacity
            }
            this.table1.push(object)
        },
        // infoTable2(){ HACER INFO DE TABLE 2

        // }

    }
})


app.mount('#app')

