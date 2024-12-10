const ryuPosition = {
    x: GameViewport.WIDTH / 2 - ryu.width / 2,
    y: GameViewport.HEIGHT - 600, // Adjust based on canvas height
};


let velocity = -5;

ryuPosition.x = GameViewport.WIDTH / 2 - ryu.width / 2;
ryuPosition.y = GameViewport.HEIGHT - 600;

ryuPosition.x += velocity;

 // Reverse direction if they hit canvas boundaries
 if (ryuPosition.x > GameViewport.WIDTH - ryu.width || ryuPosition.x < 0) {
    velocity = -velocity;
}
