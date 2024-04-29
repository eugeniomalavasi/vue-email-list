const { createApp } = Vue

createApp({
    data() {
        return {
            emailArray: [],
        }
    }, methods: {
        emailGen: function () {
            for(let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((email) => {
                this.emailArray.push(email.data.response)
                console.log(this.emailArray);
            })
        }}
    },
}).mount('#app')