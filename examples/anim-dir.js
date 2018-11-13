var diam1, dir;


function setup() {
 	createCanvas(600, 300); 
    diam1 = 10;
    dir = 1;
}

function draw() {
    background("#FFFF00"); 
    stroke("blue");
    strokeWeight(10);
    fill("red");
    ellipse(width/2, height/2, diam1, diam1);
    diam1 = diam1 + 10*dir;
    
    if(diam1 > width){   
        dir = -1;
     
    } else {
    	if (diam1 < 10){
    		dir = 1;
    	}
    }
}

