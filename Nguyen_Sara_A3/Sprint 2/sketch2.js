// Sara Nguyen
// //Kaitlin's Class: Interactive Objects and Environments 1


// This is a sketch example that uses the Speech to create visuals on screen. 

// This code is adapted and modified from p5.speech by R. Luke DuBois https://github.com/IDMNYU/p5.js-speech
// https://www.youtube.com/watch?v=RrjOp2tJ3VE


var Xpos = 0,
    Xv = 0,
    Ypos = 0,
    Yv = 0,
    Stop = false

var SpeechRec = new p5.SpeechRec();
SpeechRec.continuous = true
SpeechRec.interimResults = true


function setup() {
    createCanvas(windowWidth, windowHeight);
    //    createCanvas(400, 400);

    background(180, 140, 220);
    strokeweight(5);
    SpeechRec.onResult = showResult;
    SpeechRec.start();
}

function draw() {
    //    point(width / 2 + Xpos, height / 2 + Ypos);
    switch (SpeechRec.resultString, width / 2 + Xpos, height / 2 + Ypos)
    if (Stop == false) {
        Xpos = Xpos + Xv
        Ypos = Ypos + Yv
    }

}

function showResult() {
    //    switch (SpeechRec.resultString, width / 2 + Xpos, height / 2 + Ypos)
    //    switch (SpeechRec.resultString)
    //        console.log(SpeechRec.resultString){
    case 'up':
    Xv = 0
    Yv = -1
    break
    case 'down':
    Xv = 0
    Yv = -1
    break
    case 'right':
    Xv = -1
    Yv = 0
    break
    case 'left':
    Xv = -1
    Yv = 0
    break
}
//    console.log(SpeechRec.resultString)
}
