class Clicker {
    constructor(options) {
        this.element = options.element
        this.counter = options.counter
        this.count = 0
    }

    init() {
        this.element.addEventListener('click', () => {
            this.count += 1
            this.counter.innerHTML = this.count
            this.element.setAttribute('width', '230')
            setTimeout(() => {
                this.element.setAttribute('width', '200')
            }, 100)
        })
    }
}

const cliker = new Clicker({
    element : document.getElementById('cookie'),
    counter : document.getElementById('clicker__counter')
})

cliker.init()