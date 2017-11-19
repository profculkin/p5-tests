var r, g, b; 
var vPos = 10;

function setup() {
 	createCanvas(600, 300);
    r = random(255);
    g = random(255);
    b = random(255);   
    strokeWeight(random(30));
}

function draw() {
    background("#FF0000"); 
    stroke(r,g,b);
    line(0, vPos, width, vPos);
    vPos = vPos + 1;
    if(vPos > height){
        vPos= 10;
    }

}

function keyPressed(){
    r = random(250);
    g = random(250);
    b = random(250); 
    stroke(r, g, b);
    vPos = 10;
    strokeWeight(random(30));
    if (keyCode === LEFT_ARROW) {
        r = 0;
        g = 0;
        b = 0;
    } else if (keyCode === RIGHT_ARROW){
        r = 255;
        g = 255;
        b = 255;
    }
}