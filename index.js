const GameViewport = {
    WIDTH: window.innerWidth,  // Dynamically set to window width
    HEIGHT: window.innerHeight // Dynamically set to window height
};

window.onload = function () {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    // Set canvas dimensions to fullscreen
    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    const [ryu, background] = document.querySelectorAll('img');

    const position = {
        x: GameViewport.WIDTH / 2 - ryu.width / 2,
        y: GameViewport.HEIGHT - 600, // Adjust based on canvas height
    };

    let velocity = 5;

    // Rescale canvas on window resize
    window.onresize = function () {
        GameViewport.WIDTH = window.innerWidth;
        GameViewport.HEIGHT = window.innerHeight;

        canvasEl.width = GameViewport.WIDTH;
        canvasEl.height = GameViewport.HEIGHT;

        // Update position to stay proportional
        position.x = GameViewport.WIDTH / 2 - ryu.width / 2;
        position.y = GameViewport.HEIGHT - 10;
    };

    function frame() {
        position.x += velocity;

        // Reverse direction if it hits canvas boundaries
        if (position.x > GameViewport.WIDTH - ryu.width || position.x < 0) {
            velocity = -velocity;
        }

        // Clear the canvas
        context.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);

        // Draw the background scaled to the entire canvas
        context.drawImage(background, 0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);

        // Optional: Draw yellow cross lines for debugging
        context.strokeStyle = 'dark';
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
        context.moveTo(GameViewport.WIDTH, 0);
        context.lineTo(0, GameViewport.HEIGHT);
        context.stroke();

        // Draw the Ryu image at its updated position
        context.drawImage(ryu, position.x, position.y);

        // Request the next animation frame
        window.requestAnimationFrame(frame);
    }

    // Start the animation loop
    window.requestAnimationFrame(frame);
};
