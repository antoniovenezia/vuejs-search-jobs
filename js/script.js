Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {

            jobs: [
                {
                    id: 10,
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
                {
                    id: 3,
                    company: 'Boolean',
                    position: 'FronteEnd Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '01/06/2021',
                    logo: 'https://via.placeholder.com/100',
                    city: 'Milano',
                    contract: 'Part Time'
                },
                {
                    id: 4,
                    company: 'Boolean',
                    position: 'FronteEnd Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '01/06/2021',
                    logo: 'https://via.placeholder.com/100',
                    city: 'Milano',
                    contract: 'Part Time'
                },
                {
                    id: 5,
                    company: 'Boolean',
                    position: 'FronteEnd Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '01/06/2021',
                    logo: 'https://via.placeholder.com/100',
                    city: 'Milano',
                    contract: 'Part Time'
                },
                {
                    id: 6,
                    company: 'Boolean',
                    position: 'FronteEnd Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '01/06/2021',
                    logo: 'https://via.placeholder.com/100',
                    city: 'Milano',
                    contract: 'Part Time'
                }
            ],
            starred: [1, 2, 3],
            applied: [],

            listStarred: [],
            listApplied: [],

        },

        methods: {

            classYellow: function (index) {
                if (this.starred.includes(index) && !this.applied.includes(index)) {
                    return "yellow";
                };
            },

            pushPreferiti: function (index) {
                if (!this.starred.includes(index) && !this.applied.includes(index)) {
                    this.starred.push(index);
                    this.listStarred.push(this.jobs[index]);
                };
            },

            pushApplied: function (index) {
                if (!this.applied.includes(index)) {
                    this.applied.push(index);
                    this.starred.splice(index);
                };
                this.listApplied.push(this.jobs[index]);

            },

            classRed: function (index) {
                if (this.applied.includes(index)) {
                    // this.starred.splice(index, 1);
                    return "red";
                };
            },
        },
    });

console.log();
