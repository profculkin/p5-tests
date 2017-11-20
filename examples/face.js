var surprise = false;
var eyeHeight = 300;
var mouthSize = 20;

function setup() {
 	createCanvas(600, 600);
}

function draw() {
    background("#aaf5ff");
    //draw face
    stroke(0);
    strokeWeight(10);
    fill("#c48d4e");
    ellipse(300,300,400,400);
    //draw eyes, using variable
    line(200, 200, 200, eyeHeight);
    line(400, 200, 400, eyeHeight);
    
    noStroke()
    fill("red");
   
     ellipse(300, 400, mouthSize, mouthSize);
    if(surprise === false){
        //set value of variables
        mouthSize = 20;
        eyeHeight = 300;
   } else if(surprise === true){
       mouthSize = 100;
       eyeHeight = 220;
   }
    fill(0);
    text("Click canvas to toggle surprised face on and off", 150, 550);
}

function mousePressed(){
    //set surprise to reverse of current state
    surprise = !surprise;
    //console.log(surprise);
}