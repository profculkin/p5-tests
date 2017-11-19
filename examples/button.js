var buttonYes, buttonNo;
var numYes = 0;
var numNo = 0;

function setup() {
  createCanvas(300, 100);
}

function draw(){
  background("red");
  buttonYes = createButton('Yes');
  buttonYes.position(19, 19);
  buttonYes.mousePressed(pressYes);
  buttonNo = createButton('No');
  buttonNo.position(220, 19);
  buttonNo.mousePressed(pressNo);
  text("Yes clicks = "+ numYes, 20, 80);
  text("No clicks = "+ numNo, 200, 80);
   
}

function pressYes() {
  numYes++;
    //console.log(numYes);
  
}
function pressNo(){
    numNo++;
}