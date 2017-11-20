var diam1, yPos;


function setup() {
 	createCanvas(600, 300); 
    diam1 = 10;
    yPos = 10;
}

function draw() {
    background("#FFFF00"); 
    stroke("blue");
    strokeWeight(10);
    fill("red");
    ellipse(width/2, yPos, diam1, diam1);
    diam1 = diam1 + 3;
    yPos = yPos + 3;
    if(yPos > height){
        yPos = 10
        diam1 = 10;
    }
}

