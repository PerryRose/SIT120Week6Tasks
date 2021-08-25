const app = Vue.createApp({
    data() {
        return {
            currentTab: 'Home',
            tabs: ['Home', 'Exposure-Sites', 'Symptoms-Checker', 'Check-In']
        }
    },
    computed: {
        currentTabComponent() {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    }
});

app.component('tab-home', {
    template: `<div class="tab">Home</div>`
});

app.component('tab-exposure-sites', {
    template: `<div class="tab">Exposure Sites</div>`
});

app.component('tab-symptoms-checker', {
    template: `<div class="tab">Symptoms Checker</div>`
});

app.component('tab-check-in', {
    template: `<div class="tab">Check In</div>`
});

app.mount('#app');

