class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    render() {
        this.ctx.fillRect(100, 100, 50, 150);
    }
}
