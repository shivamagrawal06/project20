



function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/tomOne.png");
    catImg2 = loadAnimation("images/tomTwo.png", "images/tomThree.png")
    catImg3 = loadAnimation("images/tomFour.png")
    mouse1 = loadAnimation("images/jerryOne.png")
    mouse2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png")
    mouse3 = loadAnimation("images/jerryFour.png")


}

function setup() {
    createCanvas(1000, 800);

    //create tom and jerry sprites here
    garden = createSprite(600, 400);
    garden.addImage(gardenImg);
    cat = createSprite(800, 600, 50, 50);
    cat.addAnimation("sittingcat", cat1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600, 50, 50);
    mouse.addAnimation("walkingjerry", mouse1);
    mouse.scale = 0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
        cat.velocityX = 0;
        cat.addAnimation("catlastImg", catImg3);
        cat.changeAnimation("catlastImg");
        cat.x=cat.x+150;
    //}

    // if (mouse.x - cat.x > (mouse.width - cat.width) / 2) {
       // mouse.velocityX = 0;
         mouse.addAnimation("mouselastImg", mouse3);
        mouse.changeAnimation("mouselastImg");



    }    
    //write here to chage animation

    drawSprites();
}


function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        cat.velocityX = -5;
        cat.addAnimation("catrunning", catImg2);
        cat.changeAnimation("catrunning");

        mouse.addAnimation("standingmouse", mouse2);
        mouse.changeAnimation("standingmouse");
    }
    text(mouseX + ',' + mouseY, 10, 25);
}