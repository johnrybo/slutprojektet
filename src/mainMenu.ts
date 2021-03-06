class MainMenu {
    private game: IGameState;
    private mainMenuImg: p5.Image;
    private rainbow: p5.Image;
    private controlsImg: p5.Image
    private startButton!: p5.Element;
    private highScore: HighScore;
    
    constructor(game: IGameState) {
        this.game = game;
        this.mainMenuImg = backgroundLevel1;
        this.rainbow = rainbowImg;
        this.controlsImg = controlsImg;
        this.highScore = new HighScore();
        this.addStartBtn();
    }

    update() { 
        push()
        image(this.mainMenuImg, 0, 0, width, height);
        imageMode(CENTER)
        image(this.rainbow, width/2, 170, 600, 450)
        
        this.showHighScore();
        this.showInstructions();
        this.showControls();
        pop()
    }

    draw() {}

    // Add start-button.
    private addStartBtn() {
        this.startButton = createButton('Start Game');
        
        this.startButton.mousePressed(() => {
            this.startGame();
            song.setVolume(0.7);
            song.loop();
        })
        
        this.startButton.style('position', 'absolute')
        this.startButton.style('justify-content', 'center')
        this.startButton.style('top', 'calc(50% + 200px)');
        this.startButton.style('font-size', '25px')
        this.startButton.style('width', '250px')
        this.startButton.style('height', '60px') 
        this.startButton.style('border', 'none')
        this.startButton.style('border-radius', '4px')
        this.startButton.style('background-color', 'green')
        this.startButton.style('color', 'white')          
    }

    private startGame() {
        this.game.changeGameState('countdown');
    }

    // Show highscore.
    private showHighScore() {
        this.highScore.highScoreLS = Number(localStorage.getItem('highScore'));
        if (this.highScore.highScoreLS == null) {
            this.highScore.highScoreLS = 0;
        }

        textAlign(RIGHT, TOP);
        textSize(width / 40);
        text("Highscore: " + this.highScore.highScoreLS, width - 20, 20);
    }

    // Show instructions.
    private showInstructions() {
        textAlign(CENTER)
        fill('black')
        textSize(width / 50);
        text("RainBow Man can only go through the walls with the same color as himself.", width/2, height/2);
    }

    // Show controls.
    private showControls() {
        textAlign(CENTER)
        textSize(width / 40);
        text("Use left and right arrow to move.", width/2, height/2 + 50)
        image(this.controlsImg, width/2, height/2 + 120, 300, 100)
    }   
}    
        
