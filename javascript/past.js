const { createApp } = Vue

const app = createApp({
    data(){
        return{
            events:[],
            checked:[],
            categories:[],
            date:[],
            checked:[],
            filteredEvents:[],
            searchInput:''

        }

    },
    created(){
        fetch("https://amazing-events.herokuapp.com/api/events")
        .then(res=>res.json())
        .then(array=>{
            this.date=array.currentDate.split('-')
            this.events = this.filterByDate(array.events)
            this.filteredEvents=this.events
            this.getCategories()
        })
        .catch(err=>console.log(err))
    },
    methods:{
        getCategories(){
            let fn = event => event.category 
            this.categories=[... new Set(this.events.filter(fn).map(fn))]   
        },
        filterByDate(data){
            let aux = []
            let actualDate = this.date
            data.forEach(element => {
                let dataDate = element.date.split('-')
                if((dataDate[0]<actualDate[0])
                ||(dataDate[0]==actualDate[0]&&dataDate[1]<actualDate[1])
                ||(dataDate[0]==actualDate[0]&&dataDate[1]==actualDate[1]&&dataDate[2]<actualDate[2])){
                    aux.push(element) 
                }
            });
            return aux
        }

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