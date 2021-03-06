class GameOverMenu {
    private game: IGameState;
    private menuButton!: p5.Element;
    private restartButton!: p5.Element;

    constructor(game: IGameState) {
        this.game = game;
        this.addMenuButton();
        this.addRestartButton();
    }

    draw(score: number) {
        push()
        this.addBackground();
        this.addPopUp();
        this.addText(score);
        pop()
    }

    update(){}

    // Add background.
    private addBackground() {
        fill(0, 0, 0, 200);
        rect(0, 0, width, height);
    }

    // Add white pop-up window.
    private addPopUp() {
        rectMode(CENTER)
        fill('white')
        noStroke()
        rect(width/2, height/2 - 80, 400, 400);
    }

    // Add text and score on pop-up.
    private addText(score: number) {
        fill('black');
        textSize(width / 20);
        textAlign(CENTER)
        text('Game Over', width/2, height/2 - 200);
        textSize(width / 10);
        text(score, width/2, height/2 - 80); 
    }

    // Add menu-button.
    private addMenuButton() {
        this.menuButton = createButton('Menu');
        
        this.menuButton.mousePressed(() => this.goToMainMenu())
        
        this.menuButton.style('font-size', '20px');
        this.menuButton.style('width', '150');
        this.menuButton.style('height', '50');
        this.menuButton.style('background-color', 'grey');
        this.menuButton.style('border', 'none');
        this.menuButton.style('border-radius', '4px');
        this.menuButton.style('position', 'absolute');
        this.menuButton.style('justify-content', 'center');   
    }

    private goToMainMenu() {
        this.game.changeGameState('mainmenu')
    }

    // Add restart-button.
    private addRestartButton() {
        
        this.restartButton = createButton('Restart');
        this.restartButton.mousePressed(() => this.restartGame())
        this.restartButton.style('font-size', '20px');
        this.restartButton.style('width', '150');
        this.restartButton.style('height', '50');
        this.restartButton.style('background-color', 'green');
        this.restartButton.style('border', 'none');
        this.restartButton.style('border-radius', '4px');
        this.restartButton.style('position', 'absolute');
        this.restartButton.style('justify-cotent', 'center');
        this.restartButton.style('top', 'calc(50% + 45px)');
        this.restartButton.style('color', 'white');
    }

    private restartGame() {
        this.game.changeGameState('countdown')
        song.setVolume(0.7);
        song.loop();
    }
}