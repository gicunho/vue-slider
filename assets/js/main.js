const app = new Vue({
    el: '#root',
    data: {
        counter: 0,
        picked: '',
        foto: [
            {
                link: 'https://www.spaziocalcio.it/contents/uploads/2016/12/Nicola-Rizzoli-arbitro.jpg',
                name: 'rizzoli'
            },
            {
                link: 'https://www.afriquesports.net/wp-content/uploads/2020/12/1_y8BPYf0ri1Mqfwv-d4JTew@2x-800x600.jpeg',
                name: 'collina'
            },
            {
                link: 'https://cdn.calciomercato.com/images/2017-11/Orsato.arbitro.indica.2017.18.1400x840.jpg',
                name: 'orsato'

            },
            {
                link: 'https://www.ilnapolista.it/wp-content/uploads/2016/12/Tagliavento.jpg',
                name: 'tagliavento'
            },
            {
                link: 'https://www.numericalcio.it/wp-content/uploads/sites/59/2019/02/rocchi-gettyimages-975497222.jpg',
                name: 'rocchi'

            }
        ],
    },
    methods: {
        prev(){
            console.log('Cliccato su prev');
            if(this.counter === 0){
                return this.counter = this.foto.length - 1
            }
            return this.counter -= 1
        },
        next(){
            console.log('Cliccato su next');
            if(this.counter === this.foto.length - 1){
                return this.counter = 0
            }
            return this.counter += 1
        },
        selezione(index){
            app.counter == index;
        }
    },
    mounted() {
            document.addEventListener('keyup', e => {
                if (e.key === 'ArrowLeft') {
                    this.prev();
                }
                if (e.key === 'ArrowRight') {
                    app.next();
                }
            }),
            setInterval(this.next, 3000)
    }
})