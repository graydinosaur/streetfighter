class Fighter {
    constructor(name,x,y,velocity) {
        this.name = name;
        this.image = new Image();
        this.position = {x,y};
        this.velocity - velocity;
    }
    update(context){
        this.position.x += velocity;

        if (position.x > context.canvas.width - this.image.width || position.x < 0) {
            this.velocity = -this.velocity;
        }
    }
    draw(context) {
        context.drawImage(this.image, this.position.x,this.position.y)
    }
}