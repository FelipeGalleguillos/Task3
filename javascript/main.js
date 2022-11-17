const { createApp } = Vue

const app = createApp({
    data(){
        return{
            events:[],
            checked:[],
            categories:[],
            date:[],
            filteredEvents:[],
            searchInput:''

        }

    },
    created(){
        fetch("https://amazing-events.herokuapp.com/api/events")
        .then(res=>res.json())
        .then(object=>{
            this.events=object.events
            console.log(this.events);
            this.filteredEvents=object.events
            this.date=object.currentDate.split('-')
            this.getCategories()
        })
        .catch(err=>console.log(err))
    },
    methods:{
        getCategories(){
            let fn = event => event.category 
            this.categories=[... new Set(this.events.filter(fn).map(fn))]   
        },

    },
    computed:{
        filter(){
            const firstFilter = this.events.filter(event=>this.checked.includes(event.category))
            const secondFilter = firstFilter.filter(event=>event.name.toLowerCase().trim().includes(this.searchInput.toLowerCase().trim()))
            if(firstFilter.length==0){
                this.filteredEvents=this.events.filter(event=>event.name.toLowerCase().trim().includes(this.searchInput.toLowerCase().trim()))
            }else{
                this.filteredEvents=secondFilter
            }

        },
    },

})

app.mount('#app')

