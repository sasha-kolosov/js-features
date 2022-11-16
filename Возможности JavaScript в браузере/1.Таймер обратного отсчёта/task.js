class Timer {
    constructor(options) {
        this.element = options.element
        this.time = parseInt(this.element.innerHTML)
    }

    init() {
        const interval = setInterval(() => {
            if(this.time !== 0) {
                this.time -= 1
                this.element.innerHTML = this.time
            } else {
                alert('Вы победили в конкурсе!')
                clearInterval(interval)
            }
        }, 1000)
    }
}

const timer = new Timer({
    element : document.getElementById('timer')
})

timer.init()