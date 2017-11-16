var r, g, b; 

function setup() {
 	createCanvas(300, 300);
    r = random(255);
    g = random(255);
    b = random(255);          
}

function draw() {
    background(r, g, b);
}

function keyPressed(){
    r = random(250);
    g = random(250);
    b = random(250); 
    background(r, g, b);
    if (keyCode === LEFT_ARROW) {
        r = 0;
        g = 0;
        b = 0;
    }
}