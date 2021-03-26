
var canvas = new fabric.Canvas('myCanvas');

var heroWidth = 30;
var heroHeight = 30;

var playerX = 300;
var playerY = 500;

var heroPlayerObject;
var heroObject;

function heroPlayerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        heroPlayerObject = Img;
        heroPlayerObject.scaleToWidth(150);
        heroPlayerObject.scaleToHeight(140);
        heroPlayerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(heroPlayerObject);
    });
}

function new_image(getImg) {
    fabric.Image.fromURL(getImg, function(Img){
        heroObject = Img;
        heroObject.scaleToWidth(heroWidth);
        heroObject.scaleToHeight(heroHeight);
        heroObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(heroObject);
    });
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if ((e.shiftKey == true) && (keyPressed == "80")) {
        heroWidth = heroWidth + 10;
        heroHeight = heroHeight + 10;

        document.getElementById("SuperheroWidth").innerHTML = heroWidth;
        document.getElementById("SuperheroHeight").innerHTML = heroHeight;
    }

    if ((e.shiftKey == true) && (keyPressed == "77")) {
        heroWidth = heroWidth - 10;
        heroHeight = heroHeight - 10;

        document.getElementById("SuperheroWidth").innerHTML = heroWidth;
        document.getElementById("SuperheroHeight").innerHTML = heroHeight;
    }

    if (keyPressed == "70") {
        new_image("ironman_face.png");
    }

    if (keyPressed == "66") {
        new_image("spiderman_body.png");
    }

    if (keyPressed == "76") {
        new_image("hulk_legs.png");
    }

    if (keyPressed == "82") {
        new_image("thor_right_hand.png");
    }

    if (keyPressed == "72") {
        new_image("captain_america_left_hand.png");
    }

    if (keyPressed == "38") {
        up();
    }
 
    if (keyPressed == "40") {
        down();
    }
    
    if (keyPressed == "37") {
        left();
    }

    if (keyPressed == "39") {
        right();
    }
}

function up() {
    if(playerY >= 0) {
        playerY = playerY - heroHeight;
        canvas.remove(heroPlayerObject);
        heroPlayerUpdate();
    }
}

function down() {
    if(playerY <= 460) {
        playerY = playerY + heroHeight;
        canvas.remove(heroPlayerObject);
        heroPlayerUpdate();
    }
}

function left() {
    if(playerX > 0) {
        playerX = playerX - heroWidth;
        canvas.remove(heroPlayerObject);
        heroPlayerUpdate();
    }
}

function right() {
    if(playerX <= 850) {
        playerX = playerX + heroWidth;
        canvas.remove(heroPlayerObject);
        heroPlayerUpdate();
    }
}