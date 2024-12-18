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

    const [ryu, ken, background] = document.querySelectorAll('img');

    const ryuPosition = {
        x: GameViewport.WIDTH / 2 - ryu.width / 2,
        y: GameViewport.HEIGHT - 600, // Adjust based on canvas height
    };

    const kenPosition = {
        x: GameViewport.WIDTH / 4 - ken.width / 2,
        y: GameViewport.HEIGHT - 600, // Adjust based on canvas height
    };

    let velocity = 5;

    // Rescale canvas on window resize
    window.onresize = function () {
        GameViewport.WIDTH = window.innerWidth;
        GameViewport.HEIGHT = window.innerHeight;

        canvasEl.width = GameViewport.WIDTH;
        canvasEl.height = GameViewport.HEIGHT;

        // Update positions to stay proportional
        ryuPosition.x = GameViewport.WIDTH / 2 - ryu.width / 2;
        kenPosition.x = GameViewport.WIDTH / 4 - ken.width / 2;
        ryuPosition.y = GameViewport.HEIGHT - 600;
        kenPosition.y = GameViewport.HEIGHT - 600;
    };

    function frame() {
        // Move Ryu and Ken
        ryuPosition.x += velocity;
        kenPosition.x -= velocity;

        // Reverse direction if they hit canvas boundaries
        if (ryuPosition.x > GameViewport.WIDTH - ryu.width || ryuPosition.x < 0) {
            velocity = -velocity;
        }

        if (kenPosition.x > GameViewport.WIDTH - ken.width || kenPosition.x < 0) {
            velocity = -velocity;
        }

        // Clear the canvas
        context.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);

        // Draw the background scaled to the entire canvas
        context.drawImage(background, 0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);

        // Draw the Ryu and Ken images at their updated positions
        context.drawImage(ryu, ryuPosition.x, ryuPosition.y);
        context.drawImage(ken, kenPosition.x, kenPosition.y);

        // Request the next animation frame
        window.requestAnimationFrame(frame);
    }

    // Start the animation loop
    window.requestAnimationFrame(frame);
};
