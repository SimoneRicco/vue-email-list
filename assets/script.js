const app = Vue.createApp({
    data() {
        return {
            emailList: "",
            emailNumber: 10
        }
    },
    methods: {
        getEmails(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(ServerResponse => this.emailList = ServerResponse.response);
            // console.log()
        }
    },
    created() {
        console.log(this.getEmails())    
    },
});
app.mount("#app");