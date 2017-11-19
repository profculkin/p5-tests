var speed = 1;
var currentRate;
var ballX = 10;

function setup() {
    createCanvas(600, 200);
    frameRate(speed);
    textSize(30);
    textAlign(CENTER);    
}

function draw() {
    background(200);
    currentRate = speed;
    //text("Frame count = " + frameCount, width/2, height/2);
    text("frame Rate = " + currentRate, width/2, height/ 2 + 30);
    fill("#FF0000");
    ellipse(ballX, 20, 10, 10);
    ballX = ballX + 5;
    if(ballX > width){
        ballX = 0;
    }
    
}
function mousePressed(){
    //increase frameRate when mousePressed
    
    //increase variable speed
    speed = speed + 5;
        //if over 50, set it back to 10.
    if (speed > 50){
        speed = 10;
    }
    
    //set frameRate to speed
    frameRate(speed);

    //show value of speed in console
    //console.log(currentRate);
}