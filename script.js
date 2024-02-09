document.addEventListener('DOMContentLoaded', () => {
    // JavaScript code can go here, for example, to handle a dynamic projects list with Vue.js
});

const { createApp } = Vue;

createApp({
    data() {
        return {
            projects: [
                { title: 'Project 1', description: 'Description for Project 1' },
                { title: 'Project 2', description: 'Description for Project 2' }
            ]
        };
    }
}).mount('#projects-list');
