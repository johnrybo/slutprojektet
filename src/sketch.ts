//---- GLOBAL VARIABLES ----//
let game: Game;
// let characterImg: p5.Image;
let characterImgGreen: p5.Image;
let characterImgRed: p5.Image;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // Tyvärr har jag inte fått till den globala typningen för
    // inladdningen av ljud men fungerar bra enligt nedan..
    // sound = (window as any).loadSound('../assets/mySound.wav');
    
    // const xmlData = loadXML('../assets/images/rainbowMan.svg');
    // characterImg = loadImage(xmlData as any)

    characterImgGreen = loadImage('../assets/images/rainbowManGreen.svg');
    characterImgRed = loadImage('../assets/images/rainbowManRed.svg');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    // noCursor();
    
    game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    
    game.update();
    game.draw();
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}