function setup() {
  // put setup code here
    createCanvas(500, 200);
}

function draw() {
  // put drawing code here
    //draw background color, set fill, stroke, draw ellipse 
    //set position of ellipse to position of the cursor
    //set width of ellipse to the horizontal position of cursor divided by 10
    //set height of ellipse to vertical position of cursor.
    background("#FF0000");
    fill("#FFFF00");
    strokeWeight(10);
    stroke("#FFFFFF");
    ellipse(mouseX, mouseY, mouseX/10, mouseY);
    //console.log(mouseX);  
}

