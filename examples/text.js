//variable to hold text content
var myText;
function setup() {
  // put setup code here
    createCanvas(500, 300);
}

function draw() {
  // put drawing code here 
    background(240, 200, 200);
    //set size of text on mouse position
    textSize(mouseX/10);
   //if over 30 change color of fill and content of text
    if (textSize() > 30){
        fill('red');
        myText = "Enjoy Thanksgiving!";
            } else{
        fill('yellow');
        myText = "I hate turkey";    
    }
    //set font
    textFont("Georgia");
    
    text(myText, 50, 120);

    
     
}