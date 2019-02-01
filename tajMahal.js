function drawTajMahal () {
    /*
    drawDome();
    drawLine();
    */
    drawMainDome();
    drawMainRectangle();
    drawOtherRectangles();
    drawSmallDomes();
    drawLinesOnDome();
    drawMinarets();
    drawBorderRectangle();
    drawLake();
    drawTajMahalPlatform();
    drawTrees();
    drawWhiteSpace();
    //startAnimation();
    document.getElementById("statement1").innerHTML = 'My HTML5 generated representation of the Taj Mahal. (Turn on your volume for a surprise!)';
    document.getElementById("statement2").innerHTML = 'The actual Taj Mahal, the inspiration for my work.';
    var image = document.getElementById('taj_mahal_image').src="img/taj_mahal.jpeg";
    document.getElementById('taj_mahal_image').style.display='inline';
    document.getElementById("music").play(); // code found from stackoverflow
}

/*
code used to draw full circle, from which the dome will be created from:
function drawDome () {
    var ctx = document.getElementById('tajMahal').getContext('2d');
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, 2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

}
function drawLine () {
  var ctx = document.getElementById('tajMahal').getContext('2d');
  ctx.beginPath();
  ctx.moveTo(150,250);
  ctx.lineWidth = 5;
  ctx.lineTo(350,250);
  ctx.strokeStyle = "black";
  ctx.stroke();
}
*/

var domePic = new Image();
domePic.src = "img/dome.PNG";
function drawMainDome () {
  var ctx = document.getElementById('tajMahal').getContext('2d');
  ctx.drawImage(domePic, 160, 70, 126, 100);  // x-coordinate, y-coordinate, width, height
}

function drawMainRectangle () {
  var canvas = document.getElementById("tajMahal");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.strokeRect(175, 170, 100, 150);
}

function drawOtherRectangles () {
  var canvas = document.getElementById("tajMahal");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.strokeRect(126, 200, 50, 120);
  ctx.strokeRect(76, 220, 50, 100);
  ctx.strokeRect(276, 200, 50, 120);
  ctx.strokeRect(326, 220, 50, 100);
}

function drawSmallDomes () {
  var ctx = document.getElementById('tajMahal').getContext('2d');
  ctx.drawImage(domePic, 119, 150, 63, 50);  // x-coordinate, y-coordinate, width, height
  ctx.drawImage(domePic, 269, 150, 63, 50);  // x-coordinate, y-coordinate, width, height
}

/*
code for drawing lines on a dome:
function drawLinesOnDome () {
  var ctx = document.getElementById('tajMahal').getContext('2d');
  ctx.beginPath();
  ctx.moveTo(150,400);
  ctx.lineWidth = 7;
  ctx.lineTo(250,400);
  ctx.strokeStyle = "black";
  ctx.stroke();
}
*/

var linesPic = new Image();
linesPic.src = "img/line.PNG";
function drawLinesOnDome () {
  var ctx = document.getElementById('tajMahal').getContext('2d');
  ctx.drawImage(linesPic, 150, 142, 4, 16);  // x-coordinate, y-coordinate, width, height
  ctx.drawImage(linesPic, 300, 142, 4, 16);  // x-coordinate, y-coordinate, width, height
  ctx.drawImage(linesPic, 225, 50, 4, 30);  // x-coordinate, y-coordinate, width, height
}

function drawMinarets () {
  var canvas = document.getElementById("tajMahal");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.strokeRect(10, 180, 25, 175);
  ctx.strokeRect(30, 90, 25, 75);
  ctx.strokeRect(465, 180, 25, 175);
  ctx.strokeRect(445, 90, 25, 75);
  ctx.drawImage(linesPic, 20, 163, 4, 16);  // x-coordinate, y-coordinate, width, height
  ctx.drawImage(linesPic, 40, 75, 4, 16);  // x-coordinate, y-coordinate, width, height
  ctx.drawImage(linesPic, 475, 163, 4, 16);  // x-coordinate, y-coordinate, width, height
  ctx.drawImage(linesPic, 455, 75, 4, 16);  // x-coordinate, y-coordinate, width, height

}

function drawBorderRectangle () {
  var canvas = document.getElementById("tajMahal");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.strokeRect(35, 320, 430, 35);
}

function drawLake () {
  var canvas = document.getElementById("tajMahal");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#33adff";
  ctx.fillRect(175, 360, 100, 135);
  var ctx2 = canvas.getContext("2d");
  ctx2.fillStyle = "#ebbe91";
  ctx2.fillRect(175, 450, 100, 30);
  ctx2.fillStyle = "#ebbe91";
  ctx2.fillRect(175, 400, 100, 30);
}

function drawTajMahalPlatform () {
  var canvas = document.getElementById("tajMahal");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#d2a679";
  ctx.fillRect(150, 360, 25, 135);
  ctx.fillStyle = "#d2a679";
  ctx.fillRect(275, 360, 25, 135);
  ctx.fillStyle = "#67fd35";
  ctx.fillRect(75, 360, 75, 135);
  ctx.fillStyle = "#67fd35";
  ctx.fillRect(300, 360, 75, 135);
}

function drawWhiteSpace () {
    var canvas = document.getElementById("tajMahal");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.lineWidth = 5;
    ctx.fillRect(0, 360, 75, 130);
    ctx.fillRect(375, 360, 125, 130);
    ctx.fillRect(0, 0, 500, 50);
}


var treesPic = new Image();
treesPic.src = "img/tree.PNG";
function drawTrees () {
  var ctx = document.getElementById('tajMahal').getContext('2d');
  ctx.drawImage(treesPic, 90, 370, 40, 50);  // x-coordinate, y-coordinate, width, height
  ctx.drawImage(treesPic, 90, 435, 40, 50);  // x-coordinate, y-coordinate, width, height
  ctx.drawImage(treesPic, 315, 370, 40, 50);  // x-coordinate, y-coordinate, width, height
  ctx.drawImage(treesPic, 315, 435, 40, 50);  // x-coordinate, y-coordinate, width, height
}




var a;
function animate () {
  a = requestAnimationFrame(animate);
  drawTajMahal();
  drawAndMoveCamel();
  checkCamel();
  drawAndMoveCart();
  checkCart();
  drawAndMoveSwan();
  checkSwan();
}
function startAnimation () {
  animate();
}
function stopAnimation () {
  cancelAnimationFrame(a);
}
var moveAmount = 2;
var camelPic = new Image();
camelPic.src = "img/camel.png";
var camelX = 0;
var camelY2 = 435;
function drawAndMoveCamel () {
    var ctx = document.getElementById('tajMahal').getContext('2d');
    ctx.drawImage(camelPic, camelX, camelY2, 70, 50);
    camelX = camelX + moveAmount;
}

function checkCamel () {
    if (camelX < 450) {
        moveAmount = moveAmount * (-1);
        //returningCamel();
    }
    if (camelX > 0) {
        moveAmount = moveAmount * (-1);
        //returningCamel();
    }
}

var moveAmount_cart = 3;
var golfCartPic = new Image();
golfCartPic.src = "img/golf_cart.jpg";
var cartX = 430;
var cartY = 350;
function drawAndMoveCart () {
    var ctx = document.getElementById('tajMahal').getContext('2d');
    ctx.drawImage(golfCartPic, cartX, cartY, 70, 80);
    cartX = cartX + moveAmount_cart;
}

function checkCart () {
    if (cartX < 450) {
        moveAmount_cart = moveAmount_cart * (-1);
    }
    if (cartX > 0) {
        moveAmount_cart = moveAmount_cart * (-1);
    }
}

var moveAmount_swan = 1.5;
var swanPic = new Image();
swanPic.src = "img/swan.png";
var swanX = 0;
var swanY = 0;
function drawAndMoveSwan () {
    var ctx = document.getElementById('tajMahal').getContext('2d');
    ctx.drawImage(swanPic, swanX, swanY, 50, 50);
    swanX = swanX + moveAmount_swan;
}

function checkSwan () {
    if (swanX > 450) {
        moveAmount_swan = moveAmount_swan * (-1);
    }
    if (swanX < 0) {
      moveAmount_swan = moveAmount_swan * (-1);
    }
}

/*var moveAmount_returningCamel = 2;
var returningCamelPic = new Image();
returningCamelPic.src = "img/camel_return.png";
var returningCamelX = 430;
var returningCamelY = 435;
function drawAndMoveCamel () {
    var ctx = document.getElementById('tajMahal').getContext('2d');
    ctx.drawImage(returningCamelPic, returningCamelX, returningCamelY, 70, 50);
    returningCamelX = returningCamelX + moveAmount_returningCamel;
}

function checkReturningCamel () {
    if (returningCamelX < 450) {
        //moveAmount = moveAmount * (-1);
        drawAndMoveCamel();
    }
    if (returningCamelX > 0) {
        //moveAmount = moveAmount * (-1);
        drawAndMoveCamel();
    }
}
*/

var rectX = 0;
var rectY = 250;
var rectW = 50;
var rectH = 50;
var game_moveAmount = 2;
/*var difficultyLevel = document.getElementById("level").value;
if (difficultyLevel === "medium") {
  game_game_moveAmount = 10;
}
*/
function drawObjects () {
    // associate/join the canvas on index.html with javascript
    var canvas = document.getElementById('gameCanvas');
    // associate 2D draw tools with your canvas

    var ctx2 = canvas.getContext('2d');
    ctx2.fillStyle = "white";
    ctx2.fillRect(0, 0, 500, 500);
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "red";
    ctx.fillRect(rectX, rectY, rectW, rectH);    // x coordinate, y coordinate, width, height
    ctx.fillRect(250, 0, 5, 20);
    ctx.fillRect(250, 480, 5, 20);

}
function animate_game () {   // these are the frames that get animated/repeated
    b = requestAnimationFrame(animate_game);
    drawObjects();
    moveSquare();
    checkSquare();
}

function startAnimation_game () {
    animate_game();
    //alert(difficultyLevel);
    //alert(5);
}


function moveSquare () {
    rectX = rectX + game_moveAmount;  // modify x-coordinate
}
function checkSquare() {
    if (rectX > 450) {
        rectX = 0;
    }
}

function stopAnimation_game () {
    cancelAnimationFrame(b);
    var score = Math.abs(250 - rectX);
    var statement = "Your score was " + score + ", meaning that you traveled " + rectX + " units, which was "  + score + " units away from the center!";
    document.getElementById("score").innerHTML = statement;

}
function reset () {
    var canvas = document.getElementById('gameCanvas');
    // associate 2D draw tools with your canvas

    var ctx2 = canvas.getContext('2d');
    ctx2.fillStyle = "white";
    ctx2.fillRect(0, 0, 500, 500);
    ctx2.fillRect(0, 0, 500, 500);
}
