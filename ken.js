const kenPosition = {
    x: GameViewport.WIDTH / 4 - ken.width / 2,
    y: GameViewport.HEIGHT - 600, // Adjust based on canvas height
};

let velocity = 5;

kenPosition.x = GameViewport.WIDTH / 4 - ken.width / 2;
kenPosition.y = GameViewport.HEIGHT - 600;
kenPosition.x -= velocity;

if (kenPosition.x > GameViewport.WIDTH - ken.width || kenPosition.x < 0) {
    velocity = -velocity;
}
