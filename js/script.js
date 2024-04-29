const { createApp } = Vue

createApp({
    data() {
        return {
            emailArray: [],
            emailTotal: 0,
            loading: null
        }
    }, methods: {
        emailGen: function (emailTotal) {
            this.emailArray = [];
            for (let i = 0; i < emailTotal; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((email) => {
                    this.emailArray.push(email.data.response)
                    console.log(this.emailArray);
                    console.log(this.emailArray.length);
                    this.loading = true;
                    if (this.emailArray.length == this.emailTotal) {
                        this.loading = false;
                    } 
                    console.log(this.loading);
                })
            }}, loadingText: function () {
                
        }
    },
}).mount('#app')