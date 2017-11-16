 function setup() {
 	createCanvas(displayWidth, displayHeight);
	strokeWeight(10)
	stroke(0);
}

function touchMoved() {
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}

function keyPressed(){
    background(255);
    if (keyCode === LEFT_ARROW) {
        stroke("red");
    }
}