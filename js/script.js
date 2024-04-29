const { createApp } = Vue

createApp({
    data() {
        return {
            emailArray: [],
            emailTotal: 0
        }
    }, methods: {
        emailGen: function (emailTotal) {
            for(let i = 0; i < emailTotal; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((email) => {
                this.emailArray.push(email.data.response)
                console.log(this.emailArray);
            })
            console.log(this.emailTotal);
        }}
    },
}).mount('#app')