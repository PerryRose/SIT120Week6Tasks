const app = Vue.createApp({});

app.component('input-component', {
    data() {
        return {
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: ''
        }
    },
    methods: {
        submit() {
            alert(`Modelled data:\nName: ${this.firstName} ${this.lastName}\nEmail: ${this.emailAddress}\nPassword: ${this.password}`);
        }
    },
    template: `
        <div class="container">
            <li>First Name: <input type="text" v-model="firstName"/></li>
            <li>Last Name: <input type="text" v-model="lastName"/></li>
            <li>Email: <input type="text" v-model="emailAddress"/></li>
            <li>Password: <input type="password" v-model="password"/></li>
            <button @click="submit">Submit</button>
        </div>
    `
});

app.mount('#app');
