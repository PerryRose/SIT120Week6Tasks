const app = Vue.createApp({});

app.component('input-component', {
    data() {
        return {
            symptoms: [
                { symptom: 'Coughing', checked: false },
                { symptom: 'Difficulty Breathing', checked: false },
                { symptom: 'Runny Nose', checked: false },
                { symptom: 'Sore Throat', checked: false },
                { symptom: 'Loss of Taste', checked: false },
                { symptom: 'Loss of Smell', checked: false }
            ],
            getTested: false,
            message: ''
        }
    },
    methods: {
        submit() {
            this.getTested = false;
            this.symptoms.forEach(symptom => {
                if (symptom.checked) {
                    this.getTested = true;
                }
            })

            if (this.getTested) {
                this.message = 'You have symptoms. Check tested and isolate.'
            }
            else {
                this.message = 'You have no symptoms'
            }
        }
    },
    template: `
        <span v-if="message !== ''">
            <h4 :class="getTested ? 'error' : 'success'">{{ message }}</h4>
        </span>
        <li v-for="symptom in symptoms">
            {{ symptom.symptom }} <input type="checkbox" v-model="symptom.checked"/>
        </li>
        <button @click="submit">Submit</button>
    `
});

app.mount('#app');

