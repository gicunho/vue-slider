const app = new Vue({
    el: '#root',
    data: {
        counter: 0,
        foto: [
            'https://www.spaziocalcio.it/contents/uploads/2016/12/Nicola-Rizzoli-arbitro.jpg',
            'https://www.afriquesports.net/wp-content/uploads/2020/12/1_y8BPYf0ri1Mqfwv-d4JTew@2x-800x600.jpeg',
            'https://cdn.calciomercato.com/images/2017-11/Orsato.arbitro.indica.2017.18.1400x840.jpg',
            'https://www.ilnapolista.it/wp-content/uploads/2016/12/Tagliavento.jpg',
            'https://www.numericalcio.it/wp-content/uploads/sites/59/2019/02/rocchi-gettyimages-975497222.jpg'
        ],
        prova: 'ciao'
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
        }
    }
})