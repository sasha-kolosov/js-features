class Game {
    constructor(options) {
        this.elements = options.elements
        this.dead = options.dead
        this.lost = options.lost
        this.hit = 0
        this.missed = 0
    }

    clear() {
        this.hit = 0
        this.missed = 0
        this.dead.innerHTML = 0
        this.lost.innerHTML = 0
    }

    init() {
        for(let i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener('click', () => {
                if(this.elements[i].classList[1]) {

                    this.hit += 1
                    this.dead.innerHTML = this.hit

                    if(this.hit == 10) {
                        alert('You win!')
                        this.clear()
                    }

                        this.elements[i].classList.remove('hole_has-mole')
                        const random = Math.floor( 0 + Math.random() * 9 )
                        this.elements[random].classList.add('hole_has-mole')
                        
                } else {

                    this.missed += 1
                    this.lost.innerHTML = this.missed

                    if(this.missed == 5) {
                        alert('You lose')
                        this.clear()
                    }

                    for(let j = 0; j < this.elements.length; j++) {
                        if(this.elements[j].classList[1]) {
                            this.elements[j].classList.remove('hole_has-mole')
                        }
                    }
                    const random = Math.floor( 0 + Math.random() * 9 )
                    this.elements[random].classList.add('hole_has-mole')

                }
            })
        }
    }
}

const game = new Game({
    elements : document.getElementsByClassName('hole'),
    dead : document.getElementById('dead'),
    lost : document.getElementById('lost')
})

game.init() 