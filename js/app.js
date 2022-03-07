const app = new Vue ({
    el: "#app",
    data: {
        emails: [],
    },

    mounted () {
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then ( (res) => {
            console.log(res);
            const item = res.data.response;
            this.emails.push(item);
            console.log(this.emails);
        })

    }
})