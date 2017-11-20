var img1;
//preload image
function preload() {
  img1 = loadImage("images/carousel.jpg");
}

function setup() { 	
    createCanvas(200, 300);
    //create image object and set it in canvas.
    image(img1, 0, 0);
    textAlign(CENTER);
    text("Press arrow keys to change filter", 0, 160, 150, 50);
}


function keyPressed(){
    //redraw backtround color
    background(255);
  
    image(img1, 0, 0);
    
    if(keyCode === LEFT_ARROW){
        
        filter(GRAY);
    } else if(keyCode === RIGHT_ARROW){
        filter(THRESHOLD);    
    } else if(keyCode === UP_ARROW){
        
        filter(POSTERIZE, 3);
    } else if(keyCode === DOWN_ARROW){
        filter(BLUR, 10);
    }


    //redraw text to stage
    text("Press arrow keys to change filter", 0, 160, 150, 50);
}
