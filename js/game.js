const OBSTACLE_FRAMES = 120

class Game {
    constructor(ctx){
        this.ctx = ctx

        this.background = new Background(ctx)
        this.backgroundfooter = new BackgroundFooter(ctx)
        this.player = new Player(ctx)

        this.intervalId = undefined
        this.fps = 1000 / 60
    }

    start (){
        if(!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.clear()

                this.move()

                this.draw()

            }, this.fps)
        }
    }

    clear(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    move (){
        this.background.move()
        this.backgroundfooter.move()
        this.player.move()
    }

    draw (){
        this.background.draw()
        this.backgroundfooter.draw()
        this.player.draw()
    }

    onKeyDown(keyCode) {
        this.player.onKeyDown(keyCode)
      }
}
