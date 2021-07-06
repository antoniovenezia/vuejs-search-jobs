Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {

            jobs: [
                {
                    id: 1,
                    company: 'Perferendis',
                    position: 'BackEnd Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '4/04/2021',
                    logo: 'https://via.placeholder.com/100',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'Boolean',
                    position: 'FronteEnd Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '01/06/2021',
                    logo: 'https://via.placeholder.com/100',
                    city: 'Milano',
                    contract: 'Part Time'
                },
            ],

        },

        methods: {

        },
    })

console.log();