const { createApp } = Vue;

createApp({
    data() {
        return {
            var1: "var1",
            var2: "var2"
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