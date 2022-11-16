const { createApp } = Vue

const app = createApp({
    data() {
        return {
            date:'',
            events: [],
            table1: [],
            table2: [],
            table3: []
        }

    },
    created() {
        fetch('https://amazing-events.herokuapp.com/api/events')
            .then(res => res.json())
            .then(array => {
                this.events = array.events
                this.date = array.currentDate
                this.infoTable1()
                this.infoTable2()
                this.infoTable3()
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
            let row={
                col1:higher,
                col2:lower,
                col3:highCapacity
            }
            this.table1.push(row)
        },
        infoTable2(){
            let table2 = this.events.filter(event=> event.date > this.date)
            let categories = Array.from(new Set(table2.map(event=>event.category)))

            categories.forEach(category => {
                let revenues = table2.filter(event=>event.category==category)
                                     .map(event=>event.price*event.estimate)
                                     .reduce((total,revenue)=>total+revenue)
                let estimate = table2.filter(event=>event.category==category)
                                     .map(event=>event.estimate)
                                     .reduce((total,estimate)=>total+estimate)
                let capacity = table2.filter(event=>event.category==category)
                                     .map(event=>event.capacity)
                                     .reduce((total,capacity)=>total+capacity)
                let row = {
                    col1: category,
                    col2: revenues,
                    col3: (estimate*100/capacity).toFixed(1)
                } 

                this.table2.push(row)
            });

        },
        infoTable3(){
            let table3 = this.events.filter(event=> event.date < this.date)
            let categories = Array.from(new Set(table3.map(event=>event.category)))

            categories.forEach(category => {
                let revenues = table3.filter(event=>event.category==category)
                                     .map(event=>event.price*event.assistance)
                                     .reduce((total,revenue)=>total+revenue)
                let assistance = table3.filter(event=>event.category==category)
                                     .map(event=>event.assistance)
                                     .reduce((total,assistance)=>total+assistance)
                let capacity = table3.filter(event=>event.category==category)
                                     .map(event=>event.capacity)
                                     .reduce((total,capacity)=>total+capacity)
                let row = {
                    col1: category,
                    col2: revenues,
                    col3: (assistance*100/capacity).toFixed(1)
                } 

                this.table3.push(row)
            });

        }

    }
})

app.mount('#app')

