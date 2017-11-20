var escalator;
var playing = false;
function setup() {
  createCanvas(960, 600);
  // specify multiple formats for different browsers
  escalator = createVideo(['escalator.mov',
                         'escalator.mp4']);
  escalator.hide(); // by default video shows up in separate dom
                  // element. hide it and draw it to the canvas
                  // instead
}

function draw() {
  background(200);
  image(escalator,10,c10, 192, 108); // draw the video frame to canvas
  filter('GRAY');
   image(escalator,230,10, 192, 108); // draw the video frame to canvas
  filter('INVERT');
  image(escalator,200,150, 640, 360); // draw a second copy to canvas
   text("Toggle videos on and off by clicking canvas", 10, 590);
}

function mousePressed() {
    if (playing === false){
        playing = true;
        // set the video to loop and start playing
        escalator.loop();
    } else if(playing === true){
        //reset playing bariable and pause video
        playing = false;
        escalator.pause();
    }  
   // console.log(playing);
}
