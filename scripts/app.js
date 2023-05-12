const { DateTime } = luxon;
const { createApp } = Vue;

createApp({
    data() {
        return {
            isMobile: false,
            isChatListView: true,
            maxMobilePx: 480,
            searchInput: "",
            rndAnswers: [
                "È certo",
                "È decisamente così",
                "Senza alcun dubbio",
                "Sì, sicuramente",
                "Puoi contarci",
                "Per come la vedo io, sì",
                "Molto probabilmente",
                "Le prospettive sono buone",
                "Sì",
                "I segni indicano di sì",
                "Risposta nebulosa, riprova",
                "Chiedi di nuovo più tardi",
                "Meglio non dirtelo adesso",
                "Non posso prevederlo ora",
                "Concentrati e riprova",
                "Non ci contare",
                "La mia risposta è no",
                "Le mie fonti dicono di no",
                "Le prospettive non sono così buone",
                "Molto incerto",
                "Non sono sicuro, ma ho una sensazione positiva al riguardo",
                "La risposta è nel tuo cuore",
                "Solo il tempo potrà dirlo",
                "La risposta è scritta nelle stelle",
                "La vedo difficile, ci vorrebbero le 7 sfere del drago per far sì che si avveri.",
                "Non so se sia possibile, ma se hai abbastanza forza di volontà potresti diventare un Super Saiyan, che è molto più bello",
                "Non credo proprio, neanche se dovesse colpirmi un fulmine di Pikachu",
                "Non ne ho idea, ma la risposta è sicuramente 42",
                "Solo dopo che Bowser avrà sposato finalmente Peach",
                "Sì, quando sarà finito One Piece"
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
                            status: 'sent',
                            showIcon: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            showIcon: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            showIcon: false
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
                            status: 'sent',
                            showIcon: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            showIcon: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            showIcon: false
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
                            status: 'received',
                            showIcon: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            showIcon: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            showIcon: false
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
                            status: 'sent',
                            showIcon: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            showIcon: false
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
                            status: 'sent',
                            showIcon: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            showIcon: false
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: false,
                    inputMessage: "",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            showIcon: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            showIcon: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            showIcon: false
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
                            status: 'sent',
                            showIcon: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            showIcon: false
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
                            status: 'received',
                            showIcon: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            showIcon: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            showIcon: false
                        }
                    ],
                }
            ]            
        }
    },
    mounted() {
        this.checkIfMobile();
        window.addEventListener('resize', this.checkIfMobile);
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
        },
        deleteMessage(messageIndex) {
            // Chiudi dropdown
            this.$refs[`dropdown${messageIndex}`][0].click();
            // Rimuovi il messaggio dall'array
            this.contacts[this.getVisibleContactIndex()].messages.splice(messageIndex, 1);
        },
        checkIfMobile() {
            this.isMobile = window.innerWidth <= this.maxMobilePx;
        }
    }
}).mount('#app')