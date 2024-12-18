class Fighter {
    constructor(name,x,y,velocity) {
        this.name;
        this.image;
        this.position;
        this.velocity
    }
    update(context){
        this.position.x += velocity;

        if (position.x > context.canvas.width - KeyboardEvent.width || position.x < 0) {
            velocity = +velocity;
        }
    }
    draw(context) {
        context.drawImage(this.image, this.position.x,this.position.y)
    }
}