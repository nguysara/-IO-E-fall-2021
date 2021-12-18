// Sara Nguyen
// //Kaitlin's Class: Interactive Objects and Environments 1
/* 
ml5 Example & PoseNet example using p5.js
*/

// This is a sketch example that uses the Speech to create visuals on screen. 
//creates a clown nose that changes color




let video;
let poseNet;
let poses = [];
let r, g, b;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);

    video.size(width, height);

    // Create a new poseNet method with a single detection
    poseNet = ml5.poseNet(video, {
        outputStride: 8,
        quantBytes: 4
    }, modelReady);
    //pose variable
    poseNet.on('pose', function (results) {
        poses = results;
    });
    // Hide the video element, show canvas
    video.hide();

    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
}

function modelReady() {
    select('#status').html('Model Loaded');
}

function mousePressed() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);

    console.log();
}

function draw() {
    image(video, 0, 0, width, height);
    noStroke();
    if (poses.length > 0) {
        const pose = poses[0].pose;


        fill(r, g, b);
        const nose = pose.nose;
        ellipse(nose.x, nose.y, 60, 30);
    }
}
