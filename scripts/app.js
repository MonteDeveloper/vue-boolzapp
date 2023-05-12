const { DateTime } = luxon;
const { createApp } = Vue;

createApp({
    data() {
        return {
            searchInput: "",
            rndAnswers: [
                "Ok!",
                "Certo!",
                "Probabile",
                "Ci mancherebbe XD",
                "Forse",
                "Hai ragione!",
                "Non penso"
            ],
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    inputMessage: "",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: false,
                    inputMessage: "",
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: false,
                    inputMessage: "",
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: false,
                    inputMessage: "",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: false,
                    inputMessage: "",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: false,
                    inputMessage: "",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: false,
                    inputMessage: "",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: false,
                    inputMessage: "",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]            
        }
    },
    mounted() {
        console.log(this.var1);
    },
    methods: {
        getVisibleContactIndex(){
            let i = 0;
            for(contact of this.contacts){
                if(contact.visible){
                    break;
                }
                i += 1;
            }
            return i;
        },
        formatHourOfDateStr(dateStr){
            let dateWithoutDay = dateStr.split(" ")[1];
            let hours = dateWithoutDay.split(":")[0];
            let minutes = dateWithoutDay.split(":")[1];
            return `${hours}:${minutes}`;
        },
        selectChatOfIndex(contactIndex){
            this.contacts[this.getVisibleContactIndex()].visible = false;
            this.contacts[contactIndex].visible = true;
        },
        pushMessageToChat(){
            let visibleContactIndex = this.getVisibleContactIndex();
            let visibleContact = this.contacts[visibleContactIndex];
            visibleContact.messages.push(
                {
                    date: this.getCurrentTime(),
                    message: visibleContact.inputMessage,
                    status: 'sent'
                }
            )
            visibleContact.inputMessage = "";
            setTimeout(() => {
                this.receiveRndMessageToChat(visibleContactIndex);
            }, 1000);
        },
        getCurrentTime(){
            // const now = new Date();
            // const day = now.getDate().toString().padStart(2, '0');
            // const month = (now.getMonth() + 1).toString().padStart(2, '0');
            // const year = now.getFullYear();
            // const hours = now.getHours().toString().padStart(2, '0');
            // const minutes = now.getMinutes().toString().padStart(2, '0');
            // const seconds = now.getSeconds().toString().padStart(2, '0');
            // return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
            const now = DateTime.now();
            return now.toFormat('dd/MM/yyyy HH:mm:ss');
        },
        receiveRndMessageToChat(contactIndex){
            const randomIndex = Math.floor(Math.random() * this.rndAnswers.length);
            this.contacts[contactIndex].messages.push(
                {
                    date: this.getCurrentTime(),
                    message: this.rndAnswers[randomIndex],
                    status: 'received'
                }
            )
        },
        isThisContactSearched(contactIndex){
            return this.contacts[contactIndex].name.toLowerCase().startsWith(this.searchInput.toLowerCase());
        }
    }
}).mount('#app')