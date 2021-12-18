// Sara Nguyen
// //Kaitlin's Class: Interactive Objects and Environments 1


// This is a sketch example that uses the Speech to create visuals on screen. 

// This code is adapted and modified from p5.speech by R. Luke DuBois https://github.com/IDMNYU/p5.js-speech
// Youtube video reference: https://www.youtube.com/watch?v=q_bXBcmfTJM&t=367s
// with aid from Cole Beattie Interaction Design Student


var myRec = new p5.SpeechRec();
let xPos;
let yPos;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(180, 140, 220);
    noStroke();
    fill(255, 255, 255);
    xPos = random(width);
    yPos = random(height);
    //    circleColor = color(random(255), random(255), random(255));
    textSize(62);
    textAlign(CENTER);
    text('Hello! Do you want to play today?', 1000, 650);
    textStyle(BOLD);
    myRec.onResult = showResult;
    myRec.start();
}

function showResult() {
    if (myRec.resultValue == true) {
        background(105, 127, 180);
        //        fill(255, 255, 255);
        fill(random(255), random(255), random(255));
        ellipse(random(width), random(height), 50, 50);
        ellipse(xPos, xPos, mouseX, mouseY);
        //        ellipseColor: color(random(255), random(255), random(255));
        text(myRec.resultString, width / 2, height / 2);
        console.log(myRec.resultString);
    }
}
