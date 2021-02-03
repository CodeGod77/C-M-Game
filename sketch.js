
function preload() {
    //load the images here
    catAnn = loadAnimation ("cat2.png", "cat2.png");
    catImg = loadImage ("cat3.png");
    catImg3 = loadImage ("cat4.png");
    mouseAnn = loadAnimation ("mouse1.png", "mouse2.png");
    mouseImg = loadImage ("mouse3.png");
    mouseImg3 = loadImage ("mouse4.png");
    gardenImg = loadImage ("garden.png");
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite (500, 400, 200, 200);
    garden.addImage("background", gardenImg);

    cat = createSprite (800, 200, 20, 20);
    cat.addImage ("start", catImg)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

if (keyCode  === LEFT_ARROW){
    cat.velocityX= -3;
    cat.addAnimation("catrunning",catAnn);
    cat.changeAnimation ("catrunning", catAnn);
}

}
