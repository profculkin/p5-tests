var img1, img2, img3;

function preload() {
  img1 = loadImage("images/carousel.jpg");
  img2 = loadImage("images/carousel.jpg");
  img2 = loadImage("images/carousel.jpg");
}

function setup() {
 	createCanvas(450, 150);   
}

function draw(){
    image(img1, 0, 0, 150, 150);
    
    image(img2, 0, 150, 150, 150);
    filter(THRESHOLD);
    
    image(img, 0, 300, 150, 150);
    filter(GRAY);
}

