const app = Vue.createApp({
    data() {
        return {
            emailList: [],
            emailNumber: 10
        }
    },
    methods: {
        getEmails() {
            for (let i = 0; i < this.emailNumber; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(ServerResponse => this.emailList[i] += ServerResponse.data.response);
            }
        }
    },
    created() {
        console.log(this.getEmails())
    },
});
app.mount("#app");