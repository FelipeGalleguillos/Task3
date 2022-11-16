const { createApp } = Vue

const app = createApp({
    data() {
        return {
            event:{},
        }

    },
    created() {
        fetch("https://amazing-events.herokuapp.com/api/events")
            .then(res => res.json())
            .then(array => {
                this.event = this.getElementById(array.events)
            })
            .catch(err => console.log(err))
    },
    methods: {
        getElementById(data) {
            let event
            const queryString = location.search
            const id = new URLSearchParams(queryString).get("id")
            return event = data.find(element => element._id == id);
        }
    }
})

app.mount('#app')
