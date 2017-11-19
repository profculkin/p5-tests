var strokeSize, strokeColor, keyPressed;


function setup() {
 	createCanvas(600, 300); 
    strokeColor = random(255);
    strokeSize = random(50);
    keyPressed = 0;
}

function draw() {
    background("#FF0000"); 
    stroke(strokeColor);
    strokeWeight(strokeSize);
    line(random(50), random(height), random(width), random(height));
    line(random(50), random(height), random(width), random(height));
    line(random(50), random(height), random(width), random(height));
}

function keyPressed(){
    
    strokeColor = random(255);;
    stroke(strokeColor);
    strokeSize= random(50);
    strokeWeight(strokeSize);
}