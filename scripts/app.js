const { createApp } = Vue;

createApp({
    data() {
        return {
            chatList: [
                {
                    name: "Michele",
                    imagePath: "./img/avatar_1.jpg"
                },
                {
                    name: "Fabio",
                    imagePath: "./img/avatar_2.jpg"
                },
                {
                    name: "Samuele",
                    imagePath: "./img/avatar_3.jpg"
                },
                {
                    name: "Alessandro B.",
                    imagePath: "./img/avatar_4.jpg"
                },
                {
                    name: "Alessandro L.",
                    imagePath: "./img/avatar_5.jpg"
                },
                {
                    name: "Claudia",
                    imagePath: "./img/avatar_6.jpg"
                },
                {
                    name: "Federico",
                    imagePath: "./img/avatar_7.jpg"
                },
                {
                    name: "Davide",
                    imagePath: "./img/avatar_8.jpg"
                }
            ]
        }
    },
    mounted() {
        console.log(this.var1);
    },
    methods: {
        func1(){
            return this.var2;
        }
    }
}).mount('#app')