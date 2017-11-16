var capture;

function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  //capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
  filter('INVERT');
    
    //other filters THRESHOLD, GRAY, POSTERIZE, ERODE. BLUR, DILATE
    //info on filtershttps://p5js.org/reference/#/p5/filter
}
